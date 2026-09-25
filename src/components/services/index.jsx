import { CpuIcon, DatabaseIcon, LayersIcon, ServerIcon } from "lucide-react";

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "01",
    icon: ServerIcon,
    title: "Backend & REST API Development",
    description:
      "Robust, scalable backend APIs built with Django & FastAPI. Custom business logic, JWT authentication, and clean architecture.",
    deliverables: [
      "Django REST",
      "FastAPI",
      "Microservices",
      "JWT Auth",
      "Permission Systems",
    ],
  },
  {
    id: "02",
    icon: CpuIcon,
    title: "AI API Integration & RAG Pipelines",
    description:
      "Empower your product with AI capabilities using Gemini, OpenAI, vector databases (pgvector/ChromaDB), and custom RAG retrieval.",
    deliverables: [
      "RAG Pipelines",
      "Vector DBs",
      "AI Chatbots",
      "Semantic Search",
      "Prompt Workflows",
    ],
  },
  {
    id: "03",
    icon: DatabaseIcon,
    title: "Database Design & Performance",
    description:
      "Optimized database structures, caching layers, and asynchronous task queues for high-concurrency systems.",
    deliverables: [
      "PostgreSQL Schema",
      "Indexing",
      "Redis Caching",
      "Celery Task Queues",
    ],
  },
  {
    id: "04",
    icon: LayersIcon,
    title: "Full-Stack MVP Web Applications",
    description:
      "End-to-end web application development connecting modern React frontends with powerful Python backends.",
    deliverables: [
      "React + Vite",
      "WhatsApp Webhooks",
      "API Integrations",
      "Cloud Deployment",
    ],
  },
];

function InnerSeparator() {
  return (
    <div className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[8px_8px] [--pattern-foreground:var(--color-edge)]/40" />
  );
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function Services() {
  const serviceRows = chunkArray(SERVICES, 2);

  return (
    <Panel id="services">
      {/* Header */}
      <PanelHeader className="py-6">
        <PanelTitle>
          Services & Capabilities
          <PanelTitleSup>(04)</PanelTitleSup>
        </PanelTitle>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          What I can build for your business or project as a backend & AI developer.
        </p>
      </PanelHeader>

      {/* Inner separator */}
      <InnerSeparator />

      {/* Grid */}
      <div className="border-t border-edge">
        {serviceRows.map((row, rowIndex) => (
          <div key={rowIndex}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {row.map((service, colIndex) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={cn(
                      "p-6 flex flex-col justify-between space-y-4 border-b border-edge group hover:bg-muted/15 transition-colors",
                      colIndex === 0 && row.length > 1 && "sm:border-r border-edge",
                    )}
                  >
                    <div className="space-y-4">
                      {/* Top bar with index & icon */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-muted-foreground/80 tracking-widest uppercase">
                          [{service.id}]
                        </span>
                        <div className="flex size-8 items-center justify-center rounded border border-edge bg-muted/20 text-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors">
                          <Icon className="size-4" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5">
                        <h3 className="font-medium text-base text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables / Tech Tags */}
                    <div className="pt-4 border-t border-edge/60">
                      <div className="flex flex-wrap gap-1.5">
                        {service.deliverables.map((item) => (
                          <Tag
                            key={item}
                            className="text-[11px] py-0.5 px-2 bg-muted/10 border-edge/80"
                          >
                            {item}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
              {row.length === 1 && (
                <div className="hidden border-b border-edge sm:block" />
              )}
            </div>

            {rowIndex < serviceRows.length - 1 && <InnerSeparator />}
          </div>
        ))}
      </div>
    </Panel>
  );
}

