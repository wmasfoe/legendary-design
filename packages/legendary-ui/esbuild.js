const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/checkbox.tsx"],
    outdir: "lib",
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    target: ["esnext"],
  })
  .catch(() => process.exit(1));
