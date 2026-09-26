import { MailIcon } from "lucide-react";

import { FlipSentences } from "@/registry/flip-sentences";
import { PronounceMyName } from "./pronounce-my-name";
import { USER } from "@/portfolio/data/user";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/link-compat";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex flex-col border-x border-edge">
      {/* Top Header Block: Avatar Left, Name & Info Right */}
      <div className="flex items-center gap-4 p-4 sm:gap-6 sm:p-6">
        <div className="shrink-0">
          <img
            className="size-20 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-32"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center space-y-1 sm:space-y-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight sm:text-3xl">
              {USER.displayName}
            </h1>

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-8 py-0.5 sm:h-9">
            <FlipSentences
              className="font-mono text-xs text-muted-foreground sm:text-sm"
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
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-edge bg-muted/10 p-3 px-4 sm:px-6">
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
  );
}



