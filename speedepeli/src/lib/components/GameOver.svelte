<script lang="ts">
  import Modal from "./Modal.svelte";
  interface Props {
		hideModal: () => void;
		score: number;
	}

	let {hideModal, score }: Props = $props();
</script>
<Modal>
	{#snippet header()}
		<h1>Game Over</h1>
	{/snippet}
	<p>Score: {score}</p>
	{#snippet footer()}
		<button onclick={hideModal}>Sulje</button>
		<button onclick={() => { hideModal(); }}>Restart</button>
	{/snippet}
</Modal>