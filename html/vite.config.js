import UnoCSS from 'unocss/vite';
import { resolve } from "path";
import { defineConfig } from 'vite';
import { glob } from 'glob';


function getHtmlInputs(baseDir) {
  const files = glob.sync(`${baseDir}/**/*.html`);
  const inputs = {
    main: resolve(__dirname, "index.html")
  };

  for (const file of files) {
    const key = file.replace(/\.html$/, '').replace(/\\/g, '/');
    inputs[key] = resolve(__dirname, file);
  }

  return inputs;
}

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
  build: {
    rollupOptions: {

      input: {
        ...getHtmlInputs('blocks'),
        // ...getHtmlInputs('pages'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
