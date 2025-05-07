<script lang="ts">
import Header from '$lib/components/Header.svelte';
let { children } = $props();
</script>
<Header text="Speede Game Pro"/>
<main>
{@render children()}
</main>