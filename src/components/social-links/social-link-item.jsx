import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function getSocialIcon(title) {
  const t = title.toLowerCase();
  if (t.includes("github")) {
    return (
      <svg className="size-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (t.includes("linkedin")) {
    return (
      <svg className="size-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (t.includes("x") || t.includes("twitter")) {
    return (
      <svg className="size-4.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.254 2.25H9.08l4.258 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    );
  }
  if (t.includes("leetcode")) {
    return (
      <svg className="size-5 fill-current" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 0.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392a1.38 1.38 0 0 0 0-1.95 1.382 1.382 0 0 0-1.95 0l-2.396 2.392a3.023 3.023 0 0 1-4.27 0l-4.277-4.193a3.155 3.155 0 0 1-.677-.968 3.086 3.086 0 0 1-.185-.542 3.02 3.02 0 0 1 .185-1.9 3.09 3.09 0 0 1 .677-.968l3.854-4.126.039-.038L13.483 2.76a1.38 1.38 0 0 0 0-1.95 1.37 1.37 0 0 0-.961-.438zM18.8 9.7a1.38 1.38 0 0 0-1.95 0 1.38 1.38 0 0 0 0 1.95l1.6 1.6H10.15a1.38 1.38 0 1 0 0 2.76h10.3l-1.6 1.6a1.38 1.38 0 0 0 0 1.95 1.38 1.38 0 0 0 1.95 0l3.95-3.95a1.38 1.38 0 0 0 0-1.95L18.8 9.7z" />
      </svg>
    );
  }
  return null;
}

export function SocialLinkItem({ title, description, href }) {
  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors ease-out hover:bg-accent2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after",
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-foreground transition-colors group-hover/link:border-primary group-hover/link:bg-primary group-hover/link:text-primary-foreground">
        {getSocialIcon(title)}
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}

