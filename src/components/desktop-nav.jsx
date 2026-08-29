"use client";

import { usePathname } from "@/hooks/use-pathname";

import { Nav } from "@/components/nav";

export function DesktopNav({ items }) {
  const pathname = usePathname();

  return <Nav className="max-sm:hidden" items={items} activeId={pathname} />;
}
