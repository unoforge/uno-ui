const fs = require("fs");
const path = require("path");

// Root directory containing the HTML block groups
const BLOCKS_DIR = path.join(__dirname, "html", "blocks");
// Per-block JSON files will be written next to their source .html files
// The previous single JSON output (html/blocks.json) is no longer produced.
// New: a full payload array will be emitted as a TS module at app/src/data/all-blocks.ts
const ALL_BLOCKS_TS_FILE = path.join(
  __dirname,
  "app",
  "src",
  "data",
  "all-blocks.ts"
);

// Optional metadata for known groups
const GROUP_META = {
  "hero-sections": {
    order: 1,
    title: "Hero sections",
    description: "Eye-catching hero sections for landing pages.",
    itemLabel: "Hero",
  },
  content: {
    order: 2,
    title: "Content sections",
    description: "Content-focused sections for pages.",
    itemLabel: "Content",
  },
  cta: {
    order: 3,
    title: "CTA sections",
    description: "Call-to-action sections to convert users.",
    itemLabel: "CTA",
  },
  features: {
    order: 4,
    title: "Feature sections",
    description: "Highlight product features and capabilities.",
    itemLabel: "Feature",
  },
  pricing: {
    order: 5,
    title: "Pricing sections",
    description: "Pricing tables and plans.",
    itemLabel: "Pricing",
  },
  testimonials: {
    order: 6,
    title: "Testimonials",
    description: "Customer stories and reviews.",
    itemLabel: "Testimonial",
  },
  team: {
    order: 7,
    title: "Team sections",
    description: "Team member highlights and bios.",
    itemLabel: "Team",
  },
  faqs: {
    order: 8,
    title: "FAQ sections",
    description: "Frequently asked questions.",
    itemLabel: "FAQ",
  },
  "blog-sections": {
    order: 9,
    title: "Blog sections",
    description: "Blog listings and article highlights.",
    itemLabel: "Blog",
  },
  stats: {
    order: 10,
    title: "Stats sections",
    description: "KPI counters and statistic blocks.",
    itemLabel: "Stat",
  },
  footer: {
    order: 11,
    title: "Footers",
    description: "Website footer sections.",
    itemLabel: "Footer",
  },
  bento: {
    order: 12,
    title: "Bento grids",
    description: "Bento-style content grids.",
    itemLabel: "Bento",
  },
  portfolio: {
    order: 13,
    title: "Portfolio sections",
    description: "Work portfolio blocks.",
    itemLabel: "Portfolio",
  },
};

/**
 * Read directory entries with Dirent objects.
 */
function readDirEntries(dir) {
  return fs.readdirSync(dir, { withFileTypes: true });
}

function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Extract the inner HTML of the <body> element. If no <body> is found,
 * return the whole content.
 */
function extractBody(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

/**
 * Remove any <script> tag that references /main.js (module or not).
 */
function stripMainJs(html) {
  // Remove standard closing-tag variant
  let out = html.replace(
    /<script\b[^>]*\bsrc\s*=\s*["']\/?main\.js["'][^>]*>\s*<\/script>/gi,
    ""
  );
  // Also remove possible self-closing or stray variants if any
  out = out.replace(
    /<script\b[^>]*\bsrc\s*=\s*["']\/?main\.js["'][^>]*\/>/gi,
    ""
  );
  return out;
}

/**
 * Derive an item id (e.g., "01") from a file base name (e.g., "01", "hero01").
 */
function deriveId(fileBase) {
  const m = fileBase.match(/(\d+)/);
  return m ? m[1] : fileBase;
}

/**
 * Humanize group title if no metadata available. e.g., "hero-sections" -> "Hero sections"
 */
function humanizeGroupTitle(group) {
  return group
    .split("-")
    .map((w, idx) => (idx === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");
}

/**
 * Determine per-item display name, e.g., "Hero 01".
 */
function deriveItemName(group, id) {
  const meta = GROUP_META[group];
  const label = meta?.itemLabel || humanizeGroupTitle(group).split(" ")[0];
  return `${label} ${id}`;
}

/**
 * Extract inline <style> contents from HTML (concatenated), without removing them
 * from the original string. Returns ONLY inner CSS code (no <style> tags),
 * joined by two newlines. If none, returns an empty string.
 */
function extractInlineStyles(html) {
  const styles = [];
  html.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, (m, inner) => {
    const code = String(inner || "").trim();
    if (code) styles.push(code);
    return m;
  });
  return styles.join("\n\n");
}

/**
 * Extract inline <script> contents (no src attribute) from HTML (concatenated),
 * excluding any loader referencing /main.js. Returns ONLY inner JS code (no tags),
 * joined by two newlines. If none, returns an empty string.
 */
function extractInlineScripts(html) {
  const scripts = [];
  // Match paired <script>...</script>
  html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (m, attrs, inner) => {
    // Skip any script tag that references /main.js explicitly (already stripped, but safe)
    if (/\bsrc\s*=\s*["']\/?main\.js["']/i.test(m)) return m;
    // Only inline scripts (no src attribute)
    if (/\bsrc\s*=\s*["'][^"']+["']/i.test(attrs || "")) return m;
    const code = String(inner || "").trim();
    if (code) scripts.push(code);
    return m;
  });
  // Self-closing script tags either have no body or are external; ignore
  return scripts.join("\n\n");
}

/**
 * Extract external <script src="..."> references (excluding /main.js), resolve to the
 * filesystem, and read their contents. Returns an array of { filename, code }.
 *
 * Resolution strategy:
 *  - Absolute (starting with '/') -> resolved under html/ root
 *  - Relative -> first relative to the HTML file's directory; if not found, fallback to html/ root
 */
function extractExternalScriptsWithCodes(html, htmlFilePath) {
  const scripts = [];
  const htmlRoot = path.join(__dirname, "html");
  const htmlDir = path.dirname(htmlFilePath);

  // Helper to normalize and try a path
  function tryRead(candidatePath) {
    try {
      if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
        const code = fs.readFileSync(candidatePath, "utf8");
        return code;
      }
    } catch (e) {
      // ignore
    }
    return null;
  }

  function resolveAndRead(srcVal) {
    let code = null;
    let resolved = null;
    let cleanSrc = srcVal.trim();
    // ignore protocol-relative or http(s)
    if (/^(https?:)?\/\//i.test(cleanSrc)) return null;
    if (cleanSrc.startsWith("/")) {
      // under html root
      resolved = path.join(htmlRoot, cleanSrc.replace(/^\/+/, ""));
      code = tryRead(resolved);
    } else {
      // relative to the HTML file directory first
      resolved = path.join(htmlDir, cleanSrc);
      code = tryRead(resolved);
      if (code == null) {
        // fallback to html root
        resolved = path.join(htmlRoot, cleanSrc);
        code = tryRead(resolved);
      }
    }
    if (code == null) return null;
    return { filename: path.basename(cleanSrc), code };
  }

  // Paired script tags
  html.replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, (m, attrs) => {
    const srcMatch = String(attrs || "").match(/\bsrc\s*=\s*["']([^"']+)["']/i);
    if (!srcMatch) return m; // not external
    const srcVal = srcMatch[1];
    if (/^\/?main\.js$/i.test(srcVal) || /\bmain\.js\b/i.test(srcVal)) return m;
    const entry = resolveAndRead(srcVal);
    if (entry) scripts.push(entry);
    else {
      // best-effort warn
      try {
        console.error(
          `Warning: could not resolve external script src: ${srcVal} (from ${path.relative(
            process.cwd(),
            htmlFilePath
          )})`
        );
      } catch {}
    }
    return m;
  });

  // Self-closing script tags
  html.replace(/<script\b([^>]*)\/>/gi, (m, attrs) => {
    const srcMatch = String(attrs || "").match(/\bsrc\s*=\s*["']([^"']+)["']/i);
    if (!srcMatch) return m; // not external
    const srcVal = srcMatch[1];
    if (/^\/?main\.js$/i.test(srcVal) || /\bmain\.js\b/i.test(srcVal)) return m;
    const entry = resolveAndRead(srcVal);
    if (entry) scripts.push(entry);
    else {
      try {
        console.error(
          `Warning: could not resolve external script src: ${srcVal} (from ${path.relative(
            process.cwd(),
            htmlFilePath
          )})`
        );
      } catch {}
    }
    return m;
  });

  return scripts;
}

/**
 * Process a single HTML file and return an item record.
 */
function processHtmlFile(filePath, group) {
  const raw = fs.readFileSync(filePath, "utf8");
  // Ignore files without a <body>...</body>
  const hasBody = /<body[^>]*>[\s\S]*?<\/body>/i.test(raw);
  if (!hasBody) return null;
  const body = extractBody(raw);
  const cleaned = stripMainJs(body).trim();
  // Ignore if body exists but is effectively empty (e.g., only /main.js which we strip)
  if (!cleaned) return null;

  const base = path.basename(filePath, ".html");
  const baseId = deriveId(base);
  const id = `${group}${baseId}`;
  const name = deriveItemName(group, baseId);
  // Build preview URL relative to html root, as requested: "blocks/path-to-file/file-name.extension"
  const previewurl = path.posix.join("blocks", group, path.basename(filePath));
  // Optionally extract inline style/script code snippets
  const blockStyle = extractInlineStyles(cleaned);
  const blockScript = extractInlineScripts(cleaned);
  const externalScripts = extractExternalScriptsWithCodes(cleaned, filePath);
  // Remove collected <style> and <script> tags from the code to avoid duplication
  const codeWithoutAssets = stripNonMainScriptsAndStyles(cleaned).trim();

  const item = { id, name, code: codeWithoutAssets, previewurl };
  if (blockStyle) item["block-style"] = blockStyle;
  if (blockScript) item["block-script"] = blockScript;
  if (externalScripts && externalScripts.length)
    item["scripts"] = externalScripts;
  // Write per-block JSON beside the source HTML (same basename)
  try {
    const jsonPath = path.join(path.dirname('public/r/'), `${group}/${base}.json`);
    ensureDirExists(path.dirname(jsonPath));
    fs.writeFileSync(jsonPath, JSON.stringify(item, null, 2), "utf8");
  } catch (e) {
    console.error(
      `Warning: failed to write per-block JSON for ${path.relative(
        process.cwd(),
        filePath
      )}:`,
      e
    );
  }
  return item;
}

/**
 * Remove all <style> tags and all <script> tags (paired or self-closing)
 * except the loader that references /main.js. Used to keep `code` clean
 * when we already expose these tags via block-style/block-script.
 */
function stripNonMainScriptsAndStyles(html) {
  let out = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  out = out.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (m) => {
    return /\bsrc\s*=\s*["']\/?main\.js["']/i.test(m) ? m : "";
  });
  out = out.replace(/<script\b[^>]*\/>/gi, (m) => {
    return /\bsrc\s*=\s*["']\/?main\.js["']/i.test(m) ? m : "";
  });
  return out;
}

/**
 * Build the full JSON payload grouped by directories under BLOCKS_DIR
 * and return an array of group objects.
 */
function buildBlocksJson() {
  if (!fs.existsSync(BLOCKS_DIR)) {
    throw new Error(`Blocks directory not found: ${BLOCKS_DIR}`);
  }

  const groups = [];

  for (const entry of readDirEntries(BLOCKS_DIR)) {
    if (!entry.isDirectory()) continue;
    const group = entry.name;
    const groupDir = path.join(BLOCKS_DIR, group);

    // Collect HTML files within the group, sorted by name
    const files = readDirEntries(groupDir)
      .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".html"))
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    const items = files
      .map((file) => processHtmlFile(path.join(groupDir, file), group))
      .filter(Boolean);

    const meta = GROUP_META[group] || {};
    groups.push({
      name: group,
      title: meta.title || humanizeGroupTitle(group),
      description: meta.description || "",
      order: meta.order,
      items,
    });
  }

  // Sort groups alphabetically by name for determinism
  groups.sort((a, b) => a.name.localeCompare(b.name));
  return groups;
}

function main() {
  try {
    const payload = buildBlocksJson();
    // Emit TypeScript module exporting the full payload array
    const header = `/**\n * Auto-generated file. Do not edit manually.\n * Generated by build-block-json.js\n */\n`;
    const importLine = `\nimport type {  AllBlocksGroup } from "../types";\n\n`;
    const tsExport = `${header}${importLine}export const allBlocks:AllBlocksGroup[] = ${JSON.stringify(
      payload,
      null,
      2
    )} as const;\n`;
    ensureDirExists(path.dirname(ALL_BLOCKS_TS_FILE));
    fs.writeFileSync(ALL_BLOCKS_TS_FILE, tsExport, "utf8");
    console.error(
      `\nGenerated per-block JSON files and full payload TS: ${path.relative(
        process.cwd(),
        ALL_BLOCKS_TS_FILE
      )}`
    );
  } catch (err) {
    console.error("Error while building blocks JSON:\n", err);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}
