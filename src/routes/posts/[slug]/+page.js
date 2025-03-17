export const prerender = true;

export async function load({ params }) {
  const post = await import(`./${params.slug}.md`);
  return {
    content: post.default,
    frontmatter: post.metadata
  };
}
