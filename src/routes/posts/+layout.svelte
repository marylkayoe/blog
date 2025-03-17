<script>
  export let data;
</script>

<main style="max-width:700px; margin:auto; font-family:sans-serif; line-height:1.6;">
  <h1>{data.frontmatter.title}</h1>
  <p style="color:#777; font-size:0.9rem;">{new Date(data.frontmatter.date).toDateString()}</p>
  <article>
    <slot />
  </article>
</main>
