import { Link as RouterLink } from "react-router-dom";
import React from "react";

export const Link = React.forwardRef(
  ({ href, target, rel, ...props }, ref) => {
    const to = typeof href === "string" ? href : href?.pathname || "";

    // Check if the link is external or an anchor link
    const isExternal =
      typeof to === "string" &&
      (to.startsWith("http://") ||
        to.startsWith("https://") ||
        to.startsWith("mailto:") ||
        to.startsWith("tel:") ||
        to.startsWith("#"));

    if (isExternal) {
      const isHttp = to.startsWith("http://") || to.startsWith("https://");
      return (
        <a
          ref={ref}
          href={to}
          target={target ?? (isHttp ? "_blank" : undefined)}
          rel={rel ?? (isHttp ? "noopener noreferrer" : undefined)}
          {...props}
        />
      );
    }

    return (
      <RouterLink
        ref={ref}
        to={to}
        target={target}
        rel={rel}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";

