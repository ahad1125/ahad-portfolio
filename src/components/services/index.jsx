import { CpuIcon, DatabaseIcon, LayersIcon, ServerIcon } from "lucide-react";

const SERVICES = [
  {
    icon: ServerIcon,
    title: "Backend & REST API Development",
    description: "Robust, scalable backend APIs built with Django & FastAPI. Custom business logic, JWT authentication, and clean architecture.",
    deliverables: ["Django REST Framework & FastAPI APIs", "Microservices & Database Schemas", "JWT Auth & Permission Systems"],
  },
  {
    icon: CpuIcon,
    title: "AI API Integration & RAG Pipelines",
    description: "Empower your product with AI capabilities using Gemini, OpenAI, vector databases (pgvector/ChromaDB), and custom RAG retrieval.",
    deliverables: ["RAG Pipelines & Document Embedding", "AI Chatbot Integration", "Semantic Search & AI Workflows"],
  },
  {
    icon: DatabaseIcon,
    title: "Database Design & Performance",
    description: "Optimized database structures, caching layers, and asynchronous task queues for high-concurrency systems.",
    deliverables: ["PostgreSQL Schema & Indexing", "Redis Caching Layers", "Celery Asynchronous Task Pipelines"],
  },
  {
    icon: LayersIcon,
    title: "Full-Stack MVP Web Applications",
    description: "End-to-end web application development connecting modern React frontends with powerful Python backends.",
    deliverables: ["React + Vite Frontend Development", "WhatsApp & Webhook Integrations", "Vercel / Render / Supabase Deployment"],
  },
];

export function Services() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
          Services & Capabilities
        </h2>
        <p className="text-sm text-muted-foreground">
          What I can build for your business or project as a backend & AI developer.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-colors hover:bg-muted/30"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md border border-border bg-background text-foreground">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="font-medium text-base text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60">
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
