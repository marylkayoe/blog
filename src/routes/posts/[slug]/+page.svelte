<script>
    export let data;
  </script>
  
  <h1>{data.frontmatter.title}</h1>
  <p style="color:#777; font-size:0.9rem;">
    {new Date(data.frontmatter.date).toDateString()}
  </p>
  
  <article>
    {@html data.content}
  </article>
  