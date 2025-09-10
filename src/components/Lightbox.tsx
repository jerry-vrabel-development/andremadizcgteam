import type { FC } from "react";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

type Photo = {
  src: string;
  alt: string;
};

type LightboxProps = {
  photos: Photo[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
  onClose: () => void;
};

export const Lightbox: FC<LightboxProps> = ({
  photos,
  currentIndex,
  setCurrentIndex,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setCurrentIndex((currentIndex + 1) % photos.length);
      if (e.key === "ArrowLeft") setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentIndex, photos.length, setCurrentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % photos.length),
    onSwipedRight: () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length),
    delta: 50,
    trackTouch: true,
    trackMouse: false,
  });

  const { src, alt } = photos[currentIndex];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 bg-black bg-opacity-80`}
      onClick={handleClose}
    >
      <div
        {...handlers}
        className="relative max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-xl"
        />

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-200 transition"
          aria-label="Close overlay"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="mt-2 text-center text-gray-200 text-sm">{alt}</p>
      </div>
    </div>
  );
};
