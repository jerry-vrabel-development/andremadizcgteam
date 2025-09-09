import type { FC } from "react";
import { useState } from "react";

type Profile = {
  name: string;
  role: string;
  bio: string;
  img?: string; // optional – if omitted, a placeholder will be used
  alt?: string; // optional – used when an image is present
};

type ProfileCardProps = {
  profile: Profile;
  previewLength?: number;
};

export const ProfileCard: FC<ProfileCardProps> = ({
  profile,
  previewLength = 260 }) => {
  const { name, role, bio, img, alt } = profile;
  const [expanded, setExpanded] = useState(false);
  const displayedBio =
    expanded || bio.length <= previewLength
      ? bio
      : `${bio.slice(0, previewLength)}…`;

  return (
    <article className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-lg shadow-md">
      <div className="flex-none">
        <img
          src={img!}
          alt={alt!}
          className="w-36 h-36 object-cover rounded-full border-4 border-indigo-500"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-indigo-700">{name}</h2>
        <h3 className="text-sm text-indigo-500 mb-2">{role}</h3>
        <p className="text-gray-700 leading-relaxed">{displayedBio}</p>
        {bio.length > previewLength && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-3 text-indigo-500 hover:underline focus:outline-none"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </article>
  );
};
