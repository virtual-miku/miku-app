import { defineConfig } from "astro/config";
import vitePluginBundleObfuscator from "vite-plugin-bundle-obfuscator";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://miku.my.id",
  compressHTML: true,
  vite: {
    plugins: [
      vitePluginBundleObfuscator({
        autoExcludeNodeModules: true,
        threadPool: true,
        options: {
          compact: true,
          simplify: true,
          identifierNamesGenerator: "hexadecimal",
          renameGlobals: false,
          stringArray: true,
          stringArrayThreshold: 0.75,
          stringArrayEncoding: [],
          stringArrayIndexShift: true,
          stringArrayRotate: true,
          stringArrayShuffle: true,
          controlFlowFlattening: false,
          splitStrings: false,
          deadCodeInjection: false,
          debugProtection: false,
          selfDefending: false,
          unicodeEscapeSequence: false,
        },
      }),
    ],
  },
});
