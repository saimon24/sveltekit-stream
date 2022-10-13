<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="bg-slate-100 h-screen">
  <Header/>

  <div class="max-w-max mx-auto">
    <main><slot/></main>
  </div>

</div>
