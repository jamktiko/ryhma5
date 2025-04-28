<script lang="ts">
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
let year = new Date().getFullYear();
let { children } = $props();
</script>
<Header text="SpeedepeliPRo"/>
<main>
{@render children()}
</main>
<Footer company="AOTT Oy" year={year}/>