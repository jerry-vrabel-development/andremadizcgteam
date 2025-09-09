import type { FC } from "react";

type Profile = {
  name: string;
  role: string;
  bio: string;
  img?: string; // optional – if omitted, a placeholder will be used
  alt?: string; // optional – used when an image is present
};

type Props = {
  profile: Profile;
};

export const ProfileCard: FC<Props> = ({ profile }) => {
  const { name, role, bio, img, alt } = profile;
  const placeholder ="";

  return (
    <article className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-lg shadow-md">
      <div className="flex-shrink-0">
        <img
          src={img ?? placeholder}
          alt={alt ?? `${name}'s photo`}
          className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <h3 className="text-sm text-indigo-600 mb-2">{role}</h3>
        <p className="text-gray-700 leading-relaxed">{bio}</p>
      </div>
    </article>
  );
};
