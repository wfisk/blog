<script>
  // import posts from '../posts/*.md';
  import {
    posts,
    findPost
  } from 'src/data/posts';
  import Posts from 'src/components/content/posts.svelte';

  console.log(posts);
</script>

<template>
  Posts
  <main>
    <article>
      Article
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