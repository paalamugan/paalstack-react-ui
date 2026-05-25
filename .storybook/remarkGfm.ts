import remarkGfm from 'remark-gfm';

// Local Storybook preset that adds remark-gfm to the MDX compile pipeline.
// This enables GitHub-Flavored Markdown (GFM) features — tables, strikethrough,
// task lists, etc. — in all .mdx files processed by Storybook.
export async function mdxLoaderOptions(options: Record<string, unknown>) {
  const existingPlugins = ((options.mdxCompileOptions as Record<string, unknown>)?.remarkPlugins as unknown[]) ?? [];
  return {
    ...options,
    mdxCompileOptions: {
      ...(options.mdxCompileOptions as Record<string, unknown>),
      remarkPlugins: [...existingPlugins, remarkGfm],
    },
  };
}
