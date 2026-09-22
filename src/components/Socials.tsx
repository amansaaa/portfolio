import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./icons";

const links = [
  { label: "Twitter", href: "https://x.com/amanzrk", Icon: TwitterIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/amansaa", Icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/amansaaa", Icon: GithubIcon },
  { label: "Email", href: "mailto:amsaggi7@gmail.com", Icon: MailIcon },
];

export default function Socials() {
  return (
    <footer className="mt-16 pt-6 border-t border-stone-200 dark:border-stone-800">
      <div className="flex items-center justify-center gap-6">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-stone-500 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-100 transition-colors duration-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
