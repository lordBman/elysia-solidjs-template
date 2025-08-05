import * as esbuild from "esbuild";
const { solidPlugin } = require('esbuild-plugin-solid');

let ctx = await esbuild.context({
    entryPoints: [ "./client.tsx" ],
    bundle: true,
    outdir: "./public/js",
    sourcemap: true,
    plugins: [solidPlugin()]
});

await ctx.watch();

const { host, port } = await ctx.serve({ servedir: "./public" });
console.log(`EsBuild is runing on host: ${host}:${port}`);