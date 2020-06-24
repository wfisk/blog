<script>
  export let posts = [];


  console.log({
    posts
  });
</script>


<template>

  <ul>
    {#each posts as post}
    <li>
      <a href="#/posts/{post.permalink}">{post.title}</a>

    </li>
    {/each}


  </ul>


</template>