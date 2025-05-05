<script lang="ts">
	import ModalPelaa from '$lib/components/Modal.svelte';
  import {page} from '$app/stores';
  import { scale } from 'svelte/transition';
	
	interface Props {
		hidePelaa: () => void;
	}

	let { hidePelaa}: Props = $props();
</script>
<ModalPelaa>
  <div class="container" transition:scale={{delay:200, duration: 300 }}>
    <h1>Pelivaihtoehdot</h1>
  <main>
    <span>
    <a href="/peli" class:is-active={$page.url.pathname === '/peli'}>Classic</a></span>
    <span>
      <a href="/peli2" class:is-active={$page.url.pathname === '/peli2'}>Ajoitettu</a></span>
  </main>

  <button class="sulje-nappi" onclick={hidePelaa}>X</button>
</div>
</ModalPelaa>
<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #aeeffc;
  } 
  .sulje-nappi {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>