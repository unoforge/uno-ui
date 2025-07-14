import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API


const linkSchema = z.array(z.record(z.string().trim()));

const docSchema = z.object({
    title: z.string(),
    description: z.string(),
    hideTableOfContent:z.boolean().optional(),
    links: linkSchema.optional()
})
const documentation = defineCollection({
    loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/docs-content/documentation" }),
    schema: docSchema
})

const preset = defineCollection({
    loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/docs-content/preset" }),
    schema: docSchema
})

const components = defineCollection({
    loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/docs-content/components" }),
    schema: docSchema
})


// export const collections = {
//     docs: docsCollection,
//     components:docsCollection,
//     preset:docsCollection
// };

export const collections = { documentation, components, preset: preset };
