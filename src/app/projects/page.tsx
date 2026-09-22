import ProjectCard from "@/components/ProjectCard";

/**
 * projects page
 * thumbnails in /public/projects and point `image` (or `video`) at them.
 */
export default function Projects() {
  return (
    <div className="grid gap-8">
      <ProjectCard
        title="Euphoric Posters"
        description="TRANSFORM YOUR WALLS. Generated $5000+ in sales, 200+ orders, and 25K+ visits by designing and creating posters."
        href="https://example.com"
        github="https://github.com/amansaaa/euphoric-posters"
        image="/projects/euphoric.png"
      />

      <ProjectCard
        title="Visualize"
        description="pinterest for data visualization. An agent pipeline researches your query and composes an aesthetic visualization."
        href="https://vvisualize.app/"
        github="https://github.com/amansaaa/visualize"
        image="/projects/vis.png"
      />

      <ProjectCard
        title="Fantano"
        description="an Anthony Fantano recommendation system for discovering music. 50+ users, idea to production in <2 days."
        github="https://github.com/amansaaa/fantano"
      />
    </div>
  );
}
