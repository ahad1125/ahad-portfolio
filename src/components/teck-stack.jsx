import { Image } from "@/components/image-compat";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel";
import { TECH_STACK } from "@/portfolio/data/tech-stack";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader className="py-5">
        <PanelTitle>
          Stack
          <PanelTitleSup>({TECH_STACK.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-2 border-t border-edge sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {TECH_STACK.map((tech, index) => (
          <a
            key={tech.key}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2.5 border-b border-r border-edge p-4 transition-colors hover:bg-muted/15"
          >
            <Image
              src={tech.icon}
              alt={`${tech.title} icon`}
              width={32}
              height={32}
              unoptimized
              className="size-8 object-contain transition-transform duration-200 group-hover:scale-110"
            />
            <span className="font-mono text-xs font-medium text-foreground transition-colors group-hover:text-primary">
              {tech.title}
            </span>
          </a>
        ))}
      </div>
    </Panel>
  );
}

