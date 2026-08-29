import { z } from "zod";

const eventSchema = z.object({
  name: z.enum([
    "copy_npm_command",
    "copy_code_block",
    "play_name_pronunciation",
    "open_command_menu",
    "command_menu_search",
    "command_menu_action",
    "blog_search",
  ]),
  properties: z
    .record(
      z.string(),
      z.union([z.string(), z.number(), z.boolean(), z.null()]),
    )
    .optional(),
});

export function trackEvent(input) {
  const event = eventSchema.parse(input);
  if (event) {
    // PostHog removed.
    if (import.meta.env.DEV) {
      console.log("[Track Event]", event.name, event.properties);
    }
  }
}
