import type { ReactNode } from "react";

/** The <ul> that holds top-level ◆ bullets. */
export function BulletList({ children }: { children: ReactNode }) {
  return <ul className="grid gap-1 text-base">{children}</ul>;
}

/** A top-level bullet: small rotated square that spins on hover. */
export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="group flex flex-col pl-4 relative hover:translate-x-1 transition-transform duration-200">
      <span className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
      <span className="text-stone-600 dark:text-stone-400">{children}</span>
    </li>
  );
}

/** Indented ↳ sub-bullets. Nest a <SubList> inside a <Bullet> or after one. */
export function SubList({ children }: { children: ReactNode }) {
  return <ul className="grid gap-1 pl-8 mt-1 text-base">{children}</ul>;
}

export function SubBullet({ children }: { children: ReactNode }) {
  return (
    <li className="group flex items-start gap-2 hover:translate-x-1 transition-transform duration-200">
      <span className="text-stone-400 dark:text-stone-600 select-none leading-6">↳</span>
      <span className="text-stone-600 dark:text-stone-400">{children}</span>
    </li>
  );
}
