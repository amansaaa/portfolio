// Toggle for light and dark mode (sun/moon icon) and remembers the choice on next session

"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

// the theme lives on <html class="dark">; this just watches that class
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => true; // dark is the default

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore (private mode / blocked storage)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors duration-300 cursor-pointer"
    >
      {isDark ? <SunIcon className="w-[18px] h-[18px]" /> : <MoonIcon className="w-[18px] h-[18px]" />}
    </button>
  );
}
