// Creates a faint gray underlight which brighters when user hovers over
// Used across every underlinked link (nav bars, links in bullet points)

import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  /** opens in a new tab */
  external?: boolean;
  /** current page — keeps the link a little brighter, no hover sweep */
  active?: boolean;
  className?: string;
};

/**
 * Text link with a permanent faint underline that brightens on hover.
 * Used in the nav and inline in the about bullets.
 */
export default function UnderlineLink({
  href,
  children,
  external = false,
  active = false,
  className = "",
}: Props) {
  const classes = [
    "relative inline-flex items-center transition-colors duration-300",
    active
      ? "text-stone-900 dark:text-stone-100"
      : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100",
    // faint base underline
    "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-stone-300 dark:after:bg-stone-600",
    // brighter underline revealed on hover
    "before:absolute before:left-0 before:-bottom-0.5 before:h-px before:w-full before:bg-stone-800 dark:before:bg-stone-300 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
    className,
  ].join(" ");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
