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
		<div style=
		"background: linear-gradient(180deg, rgba(255, 255, 255, 0.52) 50.78%, rgba(196, 196, 196, 0.41) 60.58%, rgba(93, 93, 93, 0.26) 77.88%);
		/* Note: backdrop-filter has minimal browser support */
			display:block
			width: 250px;
    	height: 250px;
			border-radius: 50%;
    	border: none;
   	 	margin: -5px;
			/* Note: backdrop-filter has minimal browser support */">
			<span class="key-label">{keyLabel}</span></div>
		{/if}
	</button>
</div>

<style>

	
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	.key-label {
		font-family: 'Jersey 10';
		font-size: 150px;
		color: grey;
	}
</style>
