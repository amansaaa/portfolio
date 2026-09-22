// name on left and about/projects/sun/moon toggle on right

"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import UnderlineLink from "./UnderlineLink";

export default function Nav() {
  const pathname = usePathname();

  // makes the tab name slightly brighter if on that page (when 'active' is true)
  return (
    <header className="flex items-center justify-between gap-4 mb-10">
      <UnderlineLink href="/" className="text-base font-semibold">
        amanpreet saggi
      </UnderlineLink>

      <nav className="flex items-center gap-4 sm:gap-6">
        <UnderlineLink href="/" active={pathname === "/"} className="text-sm">
          about
        </UnderlineLink>
        <UnderlineLink href="/projects" active={pathname === "/projects"} className="text-sm">
          projects
        </UnderlineLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}
