export const prerender = true;

export async function load() {
  // Dynamically import all markdown files in the posts folder.
  const allPostFiles = import.meta.glob('./posts/*.md');
  
  // Turn the object of resolvers into an array of [path, resolver] pairs.
  const iterablePosts = Object.entries(allPostFiles);
  
  // For each post file, import it to get metadata and the rendered content.
  const allPosts = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const post = await resolver();
      // Compute the slug from the filename (removing directory and ".md")
      const slug = path.split('/').pop().slice(0, -3);
      return { metadata: post.metadata, content: post.default, slug };
    })
  );
  
  // Sort posts by date descending (newest first)
  allPosts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
  
  // Select the three newest posts
  const latestPosts = allPosts.slice(0, 4);
  
  return { posts: latestPosts };
}
