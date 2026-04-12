import * as esbuild from "esbuild";

esbuild.build({
    entryPoints: [
        "src/**/*.ts",
        "src/**/*.tsx"
    ],
    outdir: "lib",
    bundle: false
})