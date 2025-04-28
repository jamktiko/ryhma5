<script lang="ts">
	import { goto } from '$app/navigation';
  import Modal from '$lib/components/Modal.svelte';
  import GameOver from '$lib/components/GameOver.svelte';

  let modalState = $state(false);
  function showModal() {
    modalState=true;
  }
</script>

<h1>About sivu päivitellään jossain kohtaa</h1>
<img
	src="https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif"
	alt="Rick Roll"
	width="300"
	height="200"
/>
<button onclick={showModal}>Avaa modal</button>
{#if modalState}
  <Modal>
    <GameOver hideModal={() => (modalState = false)} />
  </Modal>
{/if}
