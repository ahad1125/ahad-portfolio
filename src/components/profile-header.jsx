import { MailIcon } from "lucide-react";

import { FlipSentences } from "@/registry/flip-sentences";
import { PronounceMyName } from "./pronounce-my-name";
import { USER } from "@/portfolio/data/user";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/link-compat";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex flex-col border-x border-edge sm:flex-row">
      <div className="shrink-0 border-b border-edge sm:border-b-0 sm:border-r">
        <div className="mx-0.5 my-[3px] p-4 sm:p-0">
          <img
            className="size-28 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2">
            <h1 className="-translate-y-px text-2xl font-bold tracking-tight sm:text-3xl">
              {USER.displayName}
            </h1>

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-9 py-1">
            <FlipSentences
              className="font-mono text-sm text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>

        {/* Action bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-edge bg-muted/10 p-3 px-4">
          <p className="font-mono text-xs text-muted-foreground">
            BS Software Engineering @ PUCIT
          </p>

          <Button asChild variant="default" size="sm" className="h-8 gap-1.5 font-mono text-xs">
            <Link href="/contact">
              <MailIcon className="size-3.5" />
              <span>Get in Touch</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


