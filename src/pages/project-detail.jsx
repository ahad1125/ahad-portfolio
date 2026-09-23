import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  BoxIcon,
  GithubIcon,
  InfinityIcon,
  LinkIcon,
} from "lucide-react";

import { Link } from "@/components/link-compat";
import { Image } from "@/components/image-compat";
import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { ImageLightbox } from "@/components/image-lightbox";
import { PROJECTS } from "@/portfolio/data/projects";
import { cn } from "@/lib/utils";
import { USER } from "@/portfolio/data/user";
import { SEO } from "@/components/seo";
import { Separator } from "@/components/separator";
import { getFirstAlphanumeric } from "@/utils/string";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate("/not-found", { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const { start, end } = project.period;
  const isOngoing = !end;
  const isSinglePeriod = end === start;

  return (
    <div className="mx-auto md:max-w-5xl *:[[id]]:scroll-mt-22">
      <SEO title={project.title} description={project.description} path={`/project/${project.id}`} />
      <Separator />

      {/* Header with back button and title */}
      <div className="flex items-center gap-3 border-x border-b border-edge px-4 py-6">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/projects">
            <ArrowLeftIcon className="size-4" />
            <span className="sr-only">Back to Projects</span>
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={40}
              height={40}
              quality={100}
              className="size-10 shrink-0 select-none"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <BoxIcon className="size-5" />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-0.5 text-sm text-muted-foreground">
              <span>{start}</span>
              {!isSinglePeriod && (
                <>
                  <span className="font-mono">—</span>
                  {isOngoing ? (
                    <>
                      <InfinityIcon
                        className="size-4 translate-y-[0.5px]"
                        aria-hidden
                      />

                      <span className="sr-only">Present</span>
                    </>
                  ) : (
                    <span>{end}</span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Hero Section: Image left, quick info right */}
      <div className="grid grid-cols-1 border-x border-b border-edge md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden border-b border-edge md:border-b-0 md:border-r">
          {project.media ? (
            project.media.type === "image" ? (
              <ImageLightbox
                src={project.media.url}
                alt={project.media.alt || project.title}
                className="h-full w-full"
              >
                <Image
                  src={project.media.url}
                  alt={project.media.alt || project.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </ImageLightbox>
            ) : (
              <video
                src={project.media.url}
                controls
                className="h-full w-full object-cover"
                poster={project.media.alt}
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/10 md:h-full">
              <span className="text-6xl font-bold text-muted-foreground/20">
                {getFirstAlphanumeric(project.title)}
              </span>
            </div>
          )}
        </div>

        {/* Quick Info */}
        <div className="flex flex-col justify-center gap-4 p-6">
          {project.link && (
            <a
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              href={project.link}
              target="_blank"
              rel="noopener"
            >
              <LinkIcon className="size-4" />
              <span>Visit Project</span>
            </a>
          )}

          {project.github && (
            <a
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              href={project.github}
              target="_blank"
              rel="noopener"
            >
              <GithubIcon className="size-4" />
              <span>View on GitHub</span>
            </a>
          )}

          {project.skills.length > 0 && (
            <div>
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Technologies
              </h4>
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.slice(0, 6).map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag>{skill}</Tag>
                  </li>
                ))}
                {project.skills.length > 6 && (
                  <li className="flex">
                    <Tag>+{project.skills.length - 6}</Tag>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Description */}
      {project.description && (
        <>
          <div className="border-x border-b border-edge p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About This Project
            </h3>
            <Prose className="prose-sm text-foreground">
              <Markdown>{project.description}</Markdown>
            </Prose>
          </div>
          <Separator />
        </>
      )}

      {/* All Skills */}
      {project.skills.length > 6 && (
        <>
          <div className="border-x border-b border-edge p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              All Technologies & Skills
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
        </>
      )}
    </div>
  );
}
