import { ProjectsGrid } from "@/components/projects/projects-grid";
import { PROJECTS } from "@/portfolio/data/projects";
import { cn } from "@/lib/utils";
import { USER } from "@/portfolio/data/user";
import { SEO } from "@/components/seo";
import { Separator } from "@/components/separator";

export default function ProjectsPage() {
  return (
    <div className="mx-auto md:max-w-5xl *:[[id]]:scroll-mt-22">
      <SEO title="Projects" description="Explore backend, AI, and full-stack software engineering projects built by Abdul Ahad." path="/projects" />
      <Separator />

      {/* Page Header */}
      <div className="border-x border-b border-edge px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 font-mono text-muted-foreground text-sm leading-relaxed">
          Full-stack and AI engineering projects — from RAG-powered chatbot builders to hybrid code search systems.
        </p>
      </div>

      <Separator />

      {/* Search + Grid (Client Component) */}
      <ProjectsGrid projects={PROJECTS} />

      <Separator />
    </div>
  );
}
