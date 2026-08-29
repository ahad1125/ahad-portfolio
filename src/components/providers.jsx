import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";

import { Toaster } from "./ui/sonner";

export function Providers({ children }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="system"
        attribute="class"
      >
        {children}
        <Toaster position="top-center" />
      </ThemeProvider>
    </JotaiProvider>
  );
}
