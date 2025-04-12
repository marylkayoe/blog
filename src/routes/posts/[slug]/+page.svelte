<script>
    export let data;
  </script>
  
  <h1>{data.frontmatter.title}</h1>
  <p style="color:#777; font-size:0.9rem;">
    {new Date(data.frontmatter.date).toDateString()}
  </p>

  <ul>
    {#each metadata.tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
  
  <article>
    {@html data.content}
  </article>
  