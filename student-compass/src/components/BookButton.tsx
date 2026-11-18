import Link from "next/link";
import { bookingHref, site } from "@/config/site";

type Variant = "brass" | "outline" | "outline-light" | "green";
type Size = "md" | "lg" | "sm";

type Props = {
  course?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

export const buttonVariants: Record<Variant, string> = {
  brass: "bg-brass text-ink hover:bg-brass-light",
  green: "bg-green text-paper hover:bg-green-soft",
  outline: "border-2 border-green text-green hover:bg-green hover:text-paper",
  "outline-light": "border-2 border-paper/70 text-paper hover:bg-paper hover:text-green",
};
export const buttonSizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};
export const buttonBase =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(20,34,36,0.55)] active:translate-y-0";

/** Opens the student Google Form in a new tab. */
export function BookButton({ course, variant = "brass", size = "md", className = "", children }: Props) {
  return (
    <a
      href={bookingHref(course)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
      aria-label={course ? `Book a free session about ${course} (opens in a new tab)` : undefined}
    >
      {children ?? "Book a free session"}
    </a>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
    >
      <path d="M4 10h11m-4-4.5L15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * "Become a partner". By default opens the partner Google Form in a new tab.
 * With `toPage`, links to the /partners page instead.
 */
export function PartnerButton({
  variant = "outline",
  size = "md",
  className = "",
  toPage = false,
  children,
}: Omit<Props, "course"> & { toPage?: boolean }) {
  const cls = `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;
  const label = children ?? "Become a partner";
  if (toPage) {
    return (
      <Link href="/partners" className={cls}>
        {label}
        <Arrow />
      </Link>
    );
  }
  return (
    <a href={site.partnerFormUrl} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
      <Arrow />
    </a>
  );
}
