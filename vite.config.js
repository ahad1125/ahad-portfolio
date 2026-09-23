import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function apiDevPlugin(env) {
  return {
    name: "api-dev-plugin",
    configureServer(server) {
      server.middlewares.use("/api/resend", async (req, res, next) => {
        if (req.method !== "POST") return next();

        // Sync env vars to process.env
        if (env) {
          Object.assign(process.env, env);
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", async () => {
          try {
            const parsedBody = body ? JSON.parse(body) : {};
            req.body = parsedBody;

            const { default: handler } = await import("./api/resend.js");

            res.status = (code) => {
              res.statusCode = code;
              return res;
            };
            res.json = (data) => {
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(data));
              return res;
            };

            await handler(req, res);
          } catch (err) {
            console.error("Local API Handler Error:", err);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), apiDevPlugin(env)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
    },
  };
});
