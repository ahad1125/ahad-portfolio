import { Link as RouterLink } from "react-router-dom";
import React from "react";

export const Link = React.forwardRef(({ href, ...props }, ref) => {
  const to = typeof href === "string" ? href : href.pathname;

  // Check if the link is external or an anchor link
  const isExternal =
    typeof to === "string" &&
    (to.startsWith("http://") ||
      to.startsWith("https://") ||
      to.startsWith("mailto:") ||
      to.startsWith("tel:") ||
      to.startsWith("#"));

  if (isExternal) {
    return <a ref={ref} href={to} {...props} />;
  }

  return <RouterLink ref={ref} to={to} {...props} />;
});
Link.displayName = "Link";
