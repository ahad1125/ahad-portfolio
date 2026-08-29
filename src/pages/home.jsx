import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ProfileHeader } from "@/components/profile-header";
import { Overview } from "@/components/overview";
import { SocialLinks } from "@/components/social-links";
import { About } from "@/components/about";
import { GitHubContributions } from "@/components/github-contributions";
import { TeckStack } from "@/components/teck-stack";
import { Projects } from "@/components/projects";
import { USER } from "@/portfolio/data/user";

export default function HomePage() {
  useEffect(() => {
    document.title = `${USER.displayName} – ${USER.jobTitle}`;
  }, []);

  return (
    <>
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

function Separator({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className,
      )}
    />
  );
}
