import { Providers } from "@/components/providers";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}
