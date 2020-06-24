<script>
  import {
    fade
  } from 'svelte/transition';
  // import posts from '../posts/*.md';
  import {
    posts,
    findPost
  } from 'src/data/posts';
  import Posts from 'src/components/content/posts.svelte';

  export let params = {};
  const timeout = 300;
  let show = true;

  const change = () => {
    show = !show;
  };

  $: post = findPost(params.post);


  $: change(post);
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
        {#if show}
          <div 
            in:fade="{{ delay: 300, duration: 300 }}"
            out:fade="{{ delay: 0, duration: 300 }}"
          >
            {@html post.html}
          </div>
        {:else}
          <div 
            in:fade="{{ delay: 300, duration: 300 }}"
            out:fade="{{ delay: 0, duration: 300 }}"
          >
            {@html post.html}
          </div>
        {/if}
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