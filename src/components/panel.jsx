import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cn } from "@/lib/utils";

function Panel({ className, ...props }) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-before screen-line-after border-x border-edge",
        className,
      )}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }) {
  return (
    <header
      data-slot="panel-header"
      className={cn("screen-line-after px-4", className)}
      {...props}
    />
  );
}

function PanelTitle({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      data-slot="panel-title"
      className={cn("text-3xl font-semibold", className)}
      {...props}
    />
  );
}

function PanelTitleSup({ className, ...props }) {
  return (
    <sup
      className={cn(
        "-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground select-none",
        className,
      )}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  );
}

export { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleSup };
