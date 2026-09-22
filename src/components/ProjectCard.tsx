import Image from "next/image";
import { ExternalIcon, GithubIcon } from "./icons";

type Props = {
  title: string;
  description: string;
  /** live site — also makes the thumbnail and title clickable */
  href?: string;
  /** repo link */
  github?: string;
  /** thumbnail in /public, e.g. "/projects/my-app.png" */
  image?: string;
  /** looping video in /public instead of an image, e.g. "/projects/my-app.mp4" */
  video?: string;
};

/**
 * One project card: thumbnail on top, title + description on the left,
 * github / live-site icons on the right. Copy a <ProjectCard /> in
 * src/app/projects/page.tsx to add another project.
 */
export default function ProjectCard({ title, description, href, github, image, video }: Props) {
  const media = video ? (
    <video
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className="rounded-t-lg w-full h-[250px] group-hover:h-[275px] object-cover object-top transition-all duration-500"
    />
  ) : image ? (
    <Image
      src={image}
      alt={title}
      width={1200}
      height={750}
      sizes="(max-width: 768px) 100vw, 672px"
      className="rounded-t-lg w-full h-[250px] group-hover:h-[275px] object-cover object-top transition-all duration-500"
    />
  ) : (
    <div className="rounded-t-lg w-full h-[250px] group-hover:h-[275px] bg-stone-200 dark:bg-stone-800 transition-all duration-500" />
  );

  return (
    <div className="group bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
          {media}
        </a>
      ) : (
        <div className="block overflow-hidden">{media}</div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
          <div>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 font-medium text-2xl transition-colors duration-200"
              >
                {title}
              </a>
            ) : (
              <span className="block text-neutral-800 dark:text-neutral-200 font-medium text-2xl">
                {title}
              </span>
            )}
            <p className="text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex gap-2 shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live site`}
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <ExternalIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
