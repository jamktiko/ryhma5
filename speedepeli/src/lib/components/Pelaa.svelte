<script lang="ts">
	import ModalPelaa from '$lib/components/Modal.svelte';
  import {page} from '$app/stores';
	
	interface Props {
		hidePelaa: () => void;
	}

	let { hidePelaa}: Props = $props();
</script>
<ModalPelaa>
  <div class="container">
    <h1>Pelivaihtoehdot</h1>
  <main>
    <span>
    <a href="/peli" class:is-active={$page.url.pathname === '/peli'}>Classic</a></span
		>
  </main>
</div>
  {#snippet footer()}
  <button class="sulje-nappi" onclick={hidePelaa}>X</button>
{/snippet}
</ModalPelaa>

