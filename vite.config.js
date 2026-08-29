import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const rybbitHost = env.NEXT_PUBLIC_RYBBIT_HOST || "";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      proxy: rybbitHost
        ? {
            "/api/script.js": {
              target: rybbitHost,
              changeOrigin: true,
            },
            "/api/track": {
              target: rybbitHost,
              changeOrigin: true,
            },
          }
        : undefined,
    },
  };
});
