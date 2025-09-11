import type { FC } from "react";
import { useEffect, useState } from "react";

interface Slice {
  label: string;
  value: number;
  color: string;
}

const slices: Slice[] = [
  { label: "Fitness Students", value: 60, color: "#fde047" },
  { label: "Amateur Fighters", value: 20, color: "#742a2a" },
  { label: "Professional Fighters", value: 10, color: "#ff00ff" },
  { label: "New/Basics Students", value: 10, color: "#d3d3d3" }
];

const total = slices.reduce((s, v) => s + v.value, 0);

const ClassCompositionChart: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* ---------- Auto‑rotate the highlighted slice ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev =>
        prev === null ? 0 : prev + 1 >= slices.length ? null : prev + 1
      );
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  /* ---------- SVG helpers ---------- */
  const radius = 100;
  const cx = radius + 10;     // +10 is a small margin for stroke width
  const cy = radius + 10;
  const innerRadius = 70;
  const viewBoxSize = 2 * (radius + 10);

  // Pre‑calculate start / end angles for each slice
  const segments = slices.reduce(
    (acc, slice) => {
      const last = acc.length ? acc[acc.length - 1].endAngle : 0;
      const start = last;
      const end = last + (slice.value / total) * 2 * Math.PI;
      acc.push({ startAngle: start, endAngle: end, slice });
      return acc;
    },
    [] as { startAngle: number; endAngle: number; slice: Slice }[]
  );

  // Arc path generator (outer radius only)
  const arcPath = (start: number, end: number, r: number) => {
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    const large = end - start > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width="220"
        height="220"
        xmlns="http://www.w3.org/2000/svg"
      >
        {segments.map((seg, i) => {
          const { startAngle, endAngle, slice } = seg;
          const isActive = activeIndex === i;
          return (
            <g key={i}>
              <path
                d={`${arcPath(startAngle, endAngle, radius)} L ${cx} ${cy} Z`}
                fill={slice.color}
                stroke="#fff"
                strokeWidth={isActive ? 4 : 1}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              />
              {isActive && (
                <text
                  x={cx}
                  y={cy}
                  dy={-radius - 20}
                  textAnchor="middle"
                  fontSize="14"
                  fill="#333"
                >
                  {slice.label}
                </text>
              )}
            </g>
          );
        })}
        {/* Inner hole */}
        <circle cx={cx} cy={cy} r={innerRadius} fill="#fff" />
      </svg>

{/* Legend */}
<div className="mt-4 flex flex-col sm:flex-row sm:flex-nowrap gap-3 sm:gap-4 lg:gap-6 space-y-2 sm:space-y-0
sm:space-x-6">
  {slices.map((s, i) => (
    <div key={i} className="flex items-center space-x-2 flex-shrink-0">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: s.color }}
      />
      <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
        {s.label}
      </span>
    </div>
  ))}
</div>
    </div>
  );
};

export default ClassCompositionChart;
