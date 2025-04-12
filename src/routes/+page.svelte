<script>
  // 'data' is provided by the load function in +page.js
  export let data;
</script>

<h1>Latest Posts</h1>

{#each data.posts as post}
  <article style="margin-bottom: 2rem; padding: 1rem; border: 1px solid #ccc;">
    <h2>{post.metadata.title}</h2>
    <p>{new Date(post.metadata.date).toDateString()}</p>
    {#if post.metadata.tags}
      <ul>
        {#each post.metadata.tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    {/if}
    <!-- Render the markdown content as a Svelte component -->
    <svelte:component this={post.content} />
  </article>
{/each}
