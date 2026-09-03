"use client";

import { useState } from "react";

export default function BrandLogo({
  slug,
  name,
  src,
  className = "h-7 w-7",
}: {
  slug: string;
  name: string;
  src?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`grid shrink-0 place-items-center rounded-xl bg-violet/10 font-extrabold text-violet ${className}`}
        aria-label={name}
      >
        {name[0]}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src ?? `https://cdn.simpleicons.org/${slug}`}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
