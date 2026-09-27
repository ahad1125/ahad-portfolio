export const PROJECTS = [
  {
    id: "botverse",
    title: "BotVerse",
    period: {
      start: "2026",
    },
    link: "https://botverse-app.vercel.app",
    github: "https://github.com/ahad1125/BotVerse",
    media: {
      type: "image",
      url: "/Images/botverse.png",
      alt: "BotVerse — Multi-tenant AI Chatbot Platform",
    },
    skills: [
      "Django REST Framework",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Celery",
      "Redis",
      "React",
      "Vite",
      "Tailwind CSS",
      "Google Gemini API",
      "ChromaDB",
      "RAG Pipeline",
      "Docker",
      "Vercel / Render"
    ],
    summary: "Multi-tenant AI chatbot builder allowing businesses to ingest documents, configure custom RAG retrieval pipelines, and embed AI assistants.",
    description: `### Overview & Problem Statement
Businesses often struggle to deploy custom, accurate AI assistants without leakages or hallucinations. **BotVerse** solves this by providing a complete multi-tenant SaaS application where companies ingest their business documents, generate embeddings, and serve custom AI chatbots.

### Technical Architecture & Implementation
- **Backend**: Built with **Django REST Framework** handling tenant organization, JWT authentication, and chatbot metadata.
- **RAG & Vector Retrieval**: Implemented document chunking and vector storage with **ChromaDB / pgvector**, using **Gemini embeddings** for high-accuracy semantic search.
- **Asynchronous Processing**: Integrated **Celery & Redis** to handle background document vectorization and heavy AI task queues without blocking main request handlers.
- **Frontend & Embeddable Widget**: Developed a fast **React + Vite** administrative dashboard and a customizable web chat widget.

### Engineering & Business Value
Demonstrates end-to-end full-stack capabilities, cloud deployment (**Vercel** frontend, **Render** backend, **Supabase** database), multi-tenancy, and production-grade RAG pipeline engineering.`,
    isPinned: true,
  },
  {
    id: "codelens",
    title: "CodeLens",
    period: {
      start: "2026",
      end: "2026",
    },
    github: "https://github.com/ahad1125/CodeLens",
    media: {
      type: "image",
      url: "/Images/codelens.png",
      alt: "CodeLens — Codebase Intelligence Engine & Hybrid Search",
    },
    skills: [
      "Django REST Framework",
      "Tree-sitter",
      "AST Parsing",
      "PostgreSQL",
      "ChromaDB",
      "Sentence Transformers",
      "Celery",
      "Redis",
      "React",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "Gemini API"
    ],
    summary: "AST-aware code intelligence and hybrid search engine for GitHub repositories combining semantic vector search with full-text search.",
    description: `### Overview & Problem Statement
Standard keyword code search misses context, while pure semantic vector search often fails to match exact symbol names or function definitions. **CodeLens** is a hybrid code search and intelligence tool built to query complex GitHub codebases using natural language.

### Technical Architecture & Implementation
- **AST Parsing Engine**: Integrated **Tree-sitter** to parse Python, JavaScript, and TypeScript into Abstract Syntax Trees, enabling structural, AST-aware code chunking rather than arbitrary line splitting.
- **Hybrid Search Engine**: Combined **PostgreSQL Full-Text Search (SearchVectorField)** with **ChromaDB vector embeddings**, using custom reciprocal rank fusion (RRF) for retrieval.
- **AI Code Citations**: Connected **Gemini LLM** to answer developer questions with exact file, line-number, and function citations.
- **Background Repositories Pipeline**: Orchestrated background GitHub cloning and syntax processing via **Celery & Redis**.

### Engineering Value
Demonstrates deep backend capabilities, language parsing fundamentals, vector search optimization, developer tooling architecture, and advanced retrieval engine design.`,
    isPinned: true,
  },
  {
    id: "replix",
    title: "Replix",
    period: {
      start: "2026",
      end: "2026",
    },
    github: "https://github.com/ahad1125/Replix",
    skills: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "WhatsApp Webhooks",
      "Gemini API",
      "Structured AI Outputs",
      "JWT Auth",
      "Docker"
    ],
    summary: "High-performance FastAPI e-commerce automation engine with AI order extraction, WhatsApp webhooks, and real-time WebSockets.",
    description: `### Overview & Problem Statement
Small businesses using conversational channels like WhatsApp lose hours manually extracting order details, checking stock, and recording customer data. **Replix** automates this by providing an AI-driven backend engine for WhatsApp messaging.

### Technical Architecture & Implementation
- **FastAPI Core Engine**: High-concurrency async Python backend using **SQLAlchemy 2.0 async ORM**, **Alembic migrations**, and **Pydantic v2** validation.
- **AI Order Extraction**: Leveraged **Gemini Structured JSON Outputs** to extract intent, product line-items, quantities, and customer shipping details from messy chat messages.
- **Real-time WebSockets & Webhooks**: Built real-time merchant order notification streams via **WebSockets** and processed incoming WhatsApp Webhook callbacks asynchronously with **Redis & Celery**.
- **System Reliability**: Built idempotency key checks, rate-limiting, and request trace IDs to protect against duplicate webhook deliveries.

### Business & Freelancing Value
Directly demonstrates my ability to build high-throughput backend APIs, webhook integrations, database models, and practical business automation tools for client projects.`,
    isPinned: true,
  }
];

