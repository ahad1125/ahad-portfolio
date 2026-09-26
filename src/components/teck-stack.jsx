import { Image } from "@/components/image-compat";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel";
import { TECH_STACK } from "@/portfolio/data/tech-stack";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    id: "01",
    label: "Backend & Systems",
    keys: ["python", "django", "fastapi", "cplusplus"],
  },
  {
    id: "02",
    label: "Databases & Infrastructure",
    keys: ["postgresql", "redis", "docker", "git"],
  },
  {
    id: "03",
    label: "Frontend & Styling",
    keys: ["javascript", "react", "tailwindcss"],
  },
];

function InnerSeparator() {
  return (
    <div className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] [--pattern-foreground:var(--color-edge)]/40" />
  );
}

export function TeckStack() {
  const techMap = new Map(TECH_STACK.map((t) => [t.key, t]));

  return (
    <Panel id="stack">
      {/* Header */}
      <PanelHeader className="py-6">
        <PanelTitle>
          Stack
          <PanelTitleSup>({TECH_STACK.length})</PanelTitleSup>
        </PanelTitle>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          Core technologies and engineering tools I use to build scalable software.
        </p>
      </PanelHeader>

      {/* Inner separator */}
      <InnerSeparator />

      {/* Categorized Tech Section */}
      <div className="border-t border-edge divide-y divide-edge">
        {CATEGORIES.map((cat) => {
          const items = cat.keys.map((k) => techMap.get(k)).filter(Boolean);
          return (
            <div
              key={cat.id}
              className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Category Label */}
              <div className="flex items-center gap-2 shrink-0 sm:w-60">
                <span className="font-mono text-xs font-semibold text-muted-foreground/80 tracking-widest uppercase">
                  [{cat.id}]
                </span>
                <span className="font-mono text-sm font-medium text-foreground">
                  {cat.label}
                </span>
              </div>

              {/* Minimal Pill Grid */}
              <div className="flex flex-wrap gap-2.5 flex-1">
                {items.map((tech) => (
                  <a
                    key={tech.key}
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group inline-flex items-center gap-2.5 rounded-md border border-edge bg-muted/10 px-3.5 py-2",
                      "transition-all duration-200 hover:border-foreground/30 hover:bg-muted/25 hover:shadow-sm"
                    )}
                  >
                    <Image
                      src={tech.icon}
                      alt={`${tech.title} icon`}
                      width={20}
                      height={20}
                      unoptimized
                      className="size-5 object-contain transition-transform duration-200 group-hover:scale-110"
                    />
                    <span className="font-mono text-xs font-medium text-foreground/90 transition-colors group-hover:text-primary">
                      {tech.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}


