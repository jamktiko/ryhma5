<script lang="ts">
  import { page } from '$app/stores';
  let { text, logo }: { text: string; logo?: string } = $props();
  // import About from '$lib/components/About.svelte';
  // let showAbout = $state(false);
</script>

<header>
<h1>{text}</h1>
<nav>
  {#if $page.url.pathname !== '/'}
  <a href="/" class:is-active={$page.url.pathname === '/'}>Aloitus sivu</a> 
  {/if}
  <!-- <button onclick={() => (showAbout = true)}>About</button>  -->
</nav>
<!-- {#if showAbout}
  <About hideModal={() => (showAbout = false)} />
{/if} -->
</header>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
h1{
  color: #ff3e00;
  font-size: 2em;
  text-align: center;
  margin: 0;
  font-family: 'Jersey 10';
font-style: normal;
font-weight: 400;
font-size: 128px;
line-height: 137px;
letter-spacing: 0.02em;
color: #000000;
text-shadow: 0px 4px 9.3px rgba(255, 0, 0, 0.25);
}
</style>