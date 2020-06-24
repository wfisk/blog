import route_home from './routes/home.svelte';
import route_posts from './routes/posts.svelte';
import route_not_found from './routes/not-found.svelte';

export default {
  // Exact path
  '/': route_home,
  '/posts/:post?': route_posts,



  '*': route_not_found,
};