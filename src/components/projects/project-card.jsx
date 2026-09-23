import { Image } from "@/components/image-compat";
import { Link } from "@/components/link-compat";
import { PinIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { getFirstAlphanumeric } from "@/utils/string";

export function ProjectCard({ project, className }) {
  const { start } = project.period;

  return (
    <Link
      href={`/project/${project.id}`}
      className={cn(
        "group relative block overflow-hidden bg-background transition-colors hover:bg-accent/50",
        className,
      )}
    >
      {/* Media Section */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-edge bg-muted">
        {project.media ? (
          project.media.type === "image" ? (
            <Image
              src={project.media.url}
              alt={project.media.alt || project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              unoptimized
            />
          ) : (
            <video
              src={project.media.url}
              className="h-full w-full object-cover"
              muted
              playsInline
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/10">
            <span className="text-4xl font-bold text-muted-foreground/30">
              {getFirstAlphanumeric(project.title)}
            </span>
          </div>
        )}

        {/* Pin Icon */}
        {project.isPinned && (
          <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/90 shadow-sm backdrop-blur-sm">
            <PinIcon
              className="size-4 rotate-45 text-secondary-foreground"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-medium leading-snug text-foreground line-clamp-2">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{start}</p>
      </div>
    </Link>
  );
}
