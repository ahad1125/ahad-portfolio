import { SiteHeader } from "@/components/site-header";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-2">
        <Outlet />
      </main>
      <ScrollToTop />
    </>
  );
}
