import Image from "next/image";
import { site } from "@/config/site";

type Props = { tone?: "dark" | "light"; className?: string; priority?: boolean };

/** Compass mark: ring, cardinal ticks and a needle bearing north-east. */
export function CompassMark({ tone = "dark", className = "" }: Props) {
  const ring = tone === "light" ? "#F5F6EF" : "#203638";
  const tail = tone === "light" ? "#F5F6EF" : "#203638";
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="17" fill="none" stroke={ring} strokeWidth="2.25" />
      <g stroke={ring} strokeWidth="2.25" strokeLinecap="round">
        <line x1="20" y1="3" x2="20" y2="7" />
        <line x1="20" y1="33" x2="20" y2="37" />
        <line x1="3" y1="20" x2="7" y2="20" />
        <line x1="33" y1="20" x2="37" y2="20" />
      </g>
      <g transform="rotate(45 20 20)">
        <path d="M20 7 L24 20 L16 20 Z" fill="#D6AA45" />
        <path d="M20 33 L24 20 L16 20 Z" fill={tail} />
      </g>
      <circle cx="20" cy="20" r="2" fill={tone === "light" ? "#203638" : "#F5F6EF"} />
    </svg>
  );
}

export function Logo({ tone = "dark", className = "", priority }: Props) {
  const img = tone === "light" ? site.logoWhiteImage || site.logoImage : site.logoImage;
  if (img) {
    return (
      <Image
        src={img}
        priority={priority}
        alt={site.name}
        width={960}
        height={272}
        className={`w-auto ${className || "h-12"}`}
      />
    );
  }
  const text = tone === "light" ? "text-paper" : "text-green";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <CompassMark tone={tone} className="h-9 w-9 shrink-0" />
      <span className={`flex flex-col leading-none ${text}`}>
        <span className="text-[1.15rem] font-extrabold tracking-[-0.03em]">Student Compass</span>
        <span className="mt-1 text-[0.72rem] font-medium tracking-[0.02em] opacity-80">Education</span>
      </span>
    </span>
  );
}
