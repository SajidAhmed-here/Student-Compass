import { bookingHref } from "@/config/site";

type Props = {
  course?: string;
  variant?: "brass" | "outline" | "outline-light" | "green";
  size?: "md" | "lg" | "sm";
  className?: string;
  children?: React.ReactNode;
};

const variants = {
  brass: "bg-brass text-ink hover:bg-brass-light",
  green: "bg-green text-paper hover:bg-green-soft",
  outline: "border-2 border-green text-green hover:bg-green hover:text-paper",
  "outline-light": "border-2 border-paper/70 text-paper hover:bg-paper hover:text-green",
};
const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

/** Opens the Google Form in a new tab. */
export function BookButton({ course, variant = "brass", size = "md", className = "", children }: Props) {
  return (
    <a
      href={bookingHref(course)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={course ? `Book a free session about ${course} (opens in a new tab)` : undefined}
    >
      {children ?? "Book a free session"}
    </a>
  );
}
