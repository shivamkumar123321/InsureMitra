import { defineConfig } from "@neon/config/v1";

export default defineConfig({
  // PostgreSQL is available on every Neon branch; no other Neon service is enabled.
  auth: false,
});
