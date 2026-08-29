import { NotFound as PageNotFound } from "@/components/not-found";
import { SEO } from "@/components/seo";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <PageNotFound className="h-screen" />
    </>
  );
}
