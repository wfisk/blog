<script>
  // import posts from '../posts/*.md';
  import {
    posts,
    findPost
  } from 'src/data/posts';
  import Posts from 'src/components/content/posts.svelte';

  export let params = {};

  $: post = findPost(params.post);
</script>

<template>
  Posts
  <main>
    <article>
      Article

      {#if params.post}
        {params.post}
      {/if}

      {#if post }
        {@html post.html}
      {/if}
    </article>
    <aside>
      Aside
      <Posts {posts} />
    </aside>
  </main>
</template>

<style>
  main {
    display: flex;
  }

  article {
    flex: 1 1 auto;
  }


  aside {
    border-left: 1px solid grey;
    padding-left: 8px;
    flex: 0 0 12rem;
  }
</style>