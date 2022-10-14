<script lang="ts">
  import { page } from '$app/stores';
</script>

<h2>About</h2>


<h1>{$page.data.title}</h1>
THIS IS EPIC
<div>{@html $page.data.content}</div>
  <div class="flex flex-col">
  {#each $page.data.pokemon as pokemon}
  <div>
  <a target="_blank" href={pokemon.url}>{pokemon.name}</a>
</div>
{/each}
</div>


