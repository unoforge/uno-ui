import fs from 'fs';
import path from 'path';
import { globby } from 'globby';

const DEMO_DIR = './src/components/ui';
const OUTPUT_FILE = './src/lib/ComponentManifest.astro';

// Add the relative paths (without .astro) that you want to skip
const EXCLUDE_LIST = [
  'button/Variants', 
  'button/Button',
  'button/Sizes',
  'button/WithIcon',
  'button/IconSizes',
  'button/Default',

  'bredcrumbs/Default',
  'breadcrumbs/StaticMore',

  "checkbox/Default",
  "divider/Default",
  "divider/WithLabel",

  "input/Default",
  "input/WithLabel",

  "kbd/Default",
  "kbd/Grouped",
  "kbd/WithIcon",

  "link/BtnLink",
  "link/Underline",
  "link/WithIcon",


  "radio/Default",
  "radio/Disabled",
  "radio/HelpMessage",
  "radio/Required",
];

async function generate() {
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = await globby(`${DEMO_DIR}/**/*.astro`);
  
  let imports = '';
  let mapping = '';
  let includedCount = 0;

  files.forEach((file, index) => {
    const relativePath = path.relative(DEMO_DIR, file).split(path.sep).join('/');
    const key = relativePath.replace('.astro', '');

    // CHECK: Skip if the key is in our exclude list
    if (EXCLUDE_LIST.includes(key)) {
      console.log(`- Skipping excluded component: ${key}`);
      return;
    }

    const varName = `Comp${index}`;
    const rawCode = fs.readFileSync(file, 'utf-8')
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\${/g, '\\${');

    imports += `import ${varName} from '@components/ui/${relativePath}';\n`;
    
    mapping += `  '${key}': {
    name: 'index.html',
    lang: 'html',
    code: \`${rawCode}\`,
    component: ${varName}
  },\n`;

    includedCount++;
  });

  const template = `---
// This file is auto-generated. Do not edit manually.
import type { SupportedLanguage } from '../types';
${imports}
export const componentManifest: Record<string, { lang: SupportedLanguage, name: string, code: string, component:any}> = {
${mapping}};
---
`;

  fs.writeFileSync(OUTPUT_FILE, template, 'utf-8');
  console.log(`✅ Success! Generated ${includedCount} components (Skipped ${files.length - includedCount}).`);
}

generate();