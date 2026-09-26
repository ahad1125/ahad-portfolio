import { CpuIcon, GraduationCapIcon, SparklesIcon } from "lucide-react";

import { Panel, PanelHeader, PanelTitle } from "./panel";
import { Tag } from "@/components/ui/tag";

const HIGHLIGHTS = [
  {
    icon: GraduationCapIcon,
    title: "Education & Foundation",
    text: "BS Software Engineering student at PUCIT (University of the Punjab), Lahore. Graduation target: 2028.",
    tags: ["PUCIT", "Software Engineering", "2024–2028"],
  },
  {
    icon: CpuIcon,
    title: "Backend & Systems",
    text: "Building high-performance REST APIs and asynchronous backend architectures using Python, Django, FastAPI, PostgreSQL, Redis, Celery, and Docker.",
    tags: ["Django REST", "FastAPI", "PostgreSQL", "Redis", "Celery"],
  },
  {
    icon: SparklesIcon,
    title: "AI & Retrieval Systems",
    text: "Developing RAG (Retrieval-Augmented Generation) pipelines, vector search (ChromaDB, pgvector), Gemini LLM integrations, and structured outputs.",
    tags: ["Gemini API", "RAG Pipelines", "ChromaDB", "pgvector"],
  },
];

export function About() {
  return (
    <Panel id="about">
      <PanelHeader className="py-5">
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 divide-y border-t border-edge md:grid-cols-3 md:divide-x md:divide-y-0 divide-edge">
        {HIGHLIGHTS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col justify-between space-y-3 p-5 transition-colors hover:bg-muted/10"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                  <div className="flex size-7 items-center justify-center rounded border border-edge bg-muted/20 text-foreground">
                    <Icon className="size-3.5" />
                  </div>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs font-mono leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2">
                {item.tags.map((tag) => (
                  <Tag
                    key={tag}
                    className="border-edge bg-muted/10 px-1.5 py-0 text-[10px]"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

