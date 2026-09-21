import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import wails from "@wailsio/runtime/plugins/vite";
import { readFileSync } from "node:fs";

// Read the pinned Wails version straight from go.mod so the footer can't
// drift out of sync with it the way a hardcoded string did.
const goMod = readFileSync(new URL("../go.mod", import.meta.url), "utf-8");
const wailsVersion = goMod.match(
  /^require github\.com\/wailsapp\/wails\/v3 (\S+)/m,
)?.[1];
if (!wailsVersion) {
  throw new Error("Could not find wails/v3 version in go.mod");
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: Number(process.env.WAILS_VITE_PORT) || 9245,
    strictPort: true,
  },
  plugins: [svelte(), wails("./bindings")],
  define: {
    __WAILS_VERSION__: JSON.stringify(wailsVersion),
  },
});
