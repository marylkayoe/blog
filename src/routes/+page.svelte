<script>
  // 'data' is provided by the load function in +page.js
  export let data;
</script>

<h1>yoe thought ...</h1>

{#each data.posts as post}
  <article style="margin-bottom: 2rem; padding: 1rem; border: 1px solid #ccc;">
    <h3>{new Date(post.metadata.date).toDateString()}</h3>
    <h2>{post.metadata.title}</h2>
  <!-- <p>{new Date(post.metadata.date).toDateString()}</p> -->

    <!-- Render the markdown content as a Svelte component -->
    <svelte:component this={post.content} />
    {#if post.metadata.tags}
    <ul>
      <p>
        <strong>Tags:</strong>
        {post.metadata.tags.join(', ')}
      </p>
      
    </ul>
  {/if}
  </article>
{/each}
