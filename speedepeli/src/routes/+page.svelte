<script lang="ts">
	import { page } from '$app/stores';
	import About from '$lib/components/About.svelte';
	let showAbout = $state(false);
</script>

<h1>Aloitus</h1>
<a href="/peli" class:is-active={$page.url.pathname === '/peli'}>Pelaa</a>
<button onclick={() => (showAbout = true)}>About</button>
{#if showAbout}
	<About hideModal={() => (showAbout = false)} />
{/if}
<a href="/highscore" class:is-active={$page.url.pathname === '/highscore'}>Highscore</a>
