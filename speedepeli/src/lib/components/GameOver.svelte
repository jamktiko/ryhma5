<script lang="ts">
  import Modal from "./Modal.svelte";
  interface Props {
		hideModal: () => void;
	}

	let {hideModal }: Props = $props();
</script>
<Modal>
	{#snippet header()}
		<h1>Game Over</h1>
	{/snippet}
	<p>Score:</p>
	{#snippet footer()}
		<button onclick={hideModal}>Sulje</button>
	{/snippet}
</Modal>