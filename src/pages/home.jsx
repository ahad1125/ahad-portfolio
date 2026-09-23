import { cn } from "@/lib/utils";
import { ProfileHeader } from "@/components/profile-header";
import { Overview } from "@/components/overview";
import { SocialLinks } from "@/components/social-links";
import { About } from "@/components/about";
import { GitHubContributions } from "@/components/github-contributions";
import { TeckStack } from "@/components/teck-stack";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Separator } from "@/components/separator";
import { USER } from "@/portfolio/data/user";
import { SEO } from "@/components/seo";

export default function HomePage() {
  return (
    <>
      <SEO path="/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-5xl *:[[id]]:scroll-mt-22">
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <About />
        <Separator />

        <TeckStack />
        <Separator />

        <Projects />
        <Separator />

        <Services />
        <Separator />

        <GitHubContributions />
        <Separator />

        <SocialLinks />
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

