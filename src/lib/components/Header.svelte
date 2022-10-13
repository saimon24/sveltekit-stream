
<script lang="ts">
      import { page } from '$app/stores';
</script>

<nav class="flex justify-center gap-16 p-4">
  <a href="/" class:nav-active-route={$page.url.pathname === '/'} >Home</a>
  <a href="/about" class:nav-active-route={$page.url.pathname === '/about'}>About</a>
  <a href="/sign-up" class:nav-active-route={$page.url.pathname === '/sign-up'}>
    Sign Up
  </a>
  <a href="/api/data"  >API</a>

</nav>

