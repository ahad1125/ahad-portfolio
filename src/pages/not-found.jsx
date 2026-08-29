import { useEffect } from "react";
import { NotFound as PageNotFound } from "@/components/not-found";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found – Alkush Pipania";
  }, []);

  return <PageNotFound className="h-screen" />;
}
