<script lang="ts">
	let { color, active = false, onClick, keyLabel } = $props();
</script>

<div class="button-wrapper">
	<button
		style="
    background: {color};
    opacity: {active ? 1 : 0.5};
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: none;
    margin: 8px;
    cursor: pointer;
  "
		onclick={onClick}
		aria-label="Interactive button"
	>
		{#if keyLabel}
			<span class="key-label">{keyLabel}</span>
		{/if}
	</button>
</div>

<style>
	.button-wrapper {
		/* Add decorative background styles here */
		background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
		border-radius: 50%;
		padding: 8px;
		width: 250px;
		height: 250px;
		margin: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		width: 90%;
		height: 90%;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		position: relative;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	.key-label {
		font-family: 'Jersey 10';
		font-size: 150px;
		color: grey;
	}
</style>
