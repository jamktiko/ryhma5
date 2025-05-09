<script lang="ts">
	let { color, active = false, onClick, keyLabel } = $props();
</script>

<div class="button-wrapper">
	<button
		class="game-button"
		style="background-color: {color}; opacity: {active ? 1 : 0.5};"
		onclick={onClick}
		aria-label="Interactive button"
	>
		{#if keyLabel}
			<span class="key-label">{keyLabel}</span>
		{/if}
	</button>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

	.button-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0.5rem;
		width: clamp(180px, 20vw, 280px);
		height: clamp(180px, 20vw, 280px);
		border-radius: 100%;
		border-color:none;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.34) 50.78%, rgba(196, 196, 196, 0.36) 60.58%, rgba(93, 93, 93, 0.22) 77.88%);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.63);
		backdrop-filter: blur(4.3px);

	}

	.game-button {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: none;
		margin: -5px;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		text-decoration: none;
		
	}
	.game-button:hover {
	
		transform: translateY(-2px);
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
	}

	.game-button:active {
		background: linear-gradient(180deg, #72727247 0%, #8e8e8e1f 50%, #8b8b8b24 100%);
		transform: translateY(2px);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	}


	.key-label {
		font-family: 'Jersey 10', sans-serif;
		font-size: clamp(80px, 8vw, 150px);
		color: grey;
	}


	/* Responsive adjustments for different screen sizes */
	@media (max-width: 1024px) {
		.button-wrapper, .game-button {
			width: clamp(120px, 22vw, 200px);
			height: clamp(120px, 22vw, 200px);
		}

		.key-label {
			font-size: clamp(50px, 10vw, 100px);
		}
	}

	@media (max-width: 768px) {
		.button-wrapper, .game-button {
			width: clamp(80px, 20vw, 150px);
			height: clamp(80px, 20vw, 150px);
			flex-direction: row;
		}
		.game-button {
			width: 100%;
			height:100%;
		}

		.key-label {
			font-size: clamp(40px, 8vw, 80px);
		}
	}

	@media (max-width: 480px) {
		.button-wrapper, .game-button {
			width: clamp(120px, 22vw, 200px);
			height: clamp(120px, 22vw, 200px);
			flex-direction: column;
		}

		.key-label {
			font-size: clamp(50px, 10vw, 100px);
		}
	}
	@media (max-width: 320px) {
		.button-wrapper, .game-button {
			width: clamp(100px, 15vw, 100px);
			height: clamp(100px, 15vw, 100px);
			flex-direction: column;
		}

		.key-label {
			font-size: clamp(30px, 6vw, 60px);
		}
	}

</style>
