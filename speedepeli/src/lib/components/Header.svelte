<script lang="ts">
  import { page } from '$app/stores';
  let { text, logo }: { text: string; logo?: string } = $props();
  // import About from '$lib/components/About.svelte';
  // let showAbout = $state(false);
</script>

<header>
<h1>{text}</h1>
{#if $page.url.pathname !== '/'}
<nav>
 
  <a href="/" class:is-active={$page.url.pathname === '/'}>Aloitus sivu</a> 

  <!-- <button onclick={() => (showAbout = true)}>About</button>  -->
</nav>
{/if}
<!-- {#if showAbout}
  <About hideModal={() => (showAbout = false)} />
{/if} -->
</header>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
h1{
  position: flex;
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
nav{
  position: flex;
width: 120px;
height: 50px;
left: 52px;
top: 60px;
box-sizing: border-box;

/* starttinappi tyyli

starttinappityyli
*/
background: linear-gradient(180deg, #FF6161 29.81%, #D55151 70.19%, #993A3A 90.87%);
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: x-large;
}
</style>