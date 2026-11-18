"use client";

import Image from "next/image";
import { useState } from "react";
import { CompassMark } from "./Logo";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Show the compass mark on the fallback panel. */
  mark?: boolean;
};

/**
 * Fills its (relative) parent. If the photo can't load, a brand-coloured
 * panel with the compass mark takes its place.
 */
export function Photo({ src, alt, sizes, priority, className = "", mark = true }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-green"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(214,170,69,0.18), transparent 55%), repeating-linear-gradient(0deg, rgba(245,246,239,0.05) 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, rgba(245,246,239,0.05) 0 1px, transparent 1px 32px)",
        }}
      >
        {mark && <CompassMark tone="light" className="h-14 w-14 opacity-40" />}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
