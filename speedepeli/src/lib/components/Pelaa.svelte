<script lang="ts">
	import ModalPelaa from '$lib/components/Modal.svelte';
	import { page } from '$app/stores';
	import { scale } from 'svelte/transition';

	interface Props {
		hidePelaa: () => void;
	}

	let { hidePelaa }: Props = $props();
</script>

<ModalPelaa>
	<div class="container" transition:scale={{ delay: 200, duration: 300 }}>
		<h1>Pelivaihtoehdot</h1>
		<main>
			<span> <a href="/peli" class="custom-button">Classic</a></span>
			<span> <a href="/peli2" class="custom-button">Ajoitettu</a></span>
		</main>

		<button class="sulje-nappi" onclick={hidePelaa}>X</button>
	</div>
</ModalPelaa>

<style>
	h1 {
		font-family: 'Jersey 10';
	}
	@media (max-width: 755px) {
		h1 {
			font-size: 25px;
		}
	}
	@media (max-width: 390px) {
		h1 {
			font-size: 20px;
		}
	}
	.custom-button {
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		border: 3px solid #000000;
		border-radius: 14px;
		color: black;
		font-family: 'Jersey 10', sans-serif;
		font-size: 45px;
		padding: 10px 30px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: all 0.2s ease;
		position: flex;
		top: 0;
		text-decoration: none;
	}
	@media (max-width: 755px) {
		.custom-button {
			padding: 5px 15px;
			font-size: 22px;
		}
	}
	@media (max-width: 390px) {
		.custom-button {
			padding: 3px 10px;
			font-size: 15px;
		}
	}

	.custom-button:hover {
		background: linear-gradient(180deg, #ff7777 0%, #e66666 50%, #aa4444 100%);
		transform: translateY(-2px);
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
	}

	.custom-button:active {
		background: linear-gradient(180deg, #d55151 0%, #993a3a 50%, #772222 100%);
		transform: translateY(1px);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #aeeffc;
		padding-bottom: 80px;
	}
	@media (max-width: 755px) {
		.container {
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.sulje-nappi {
		font-family: 'Jersey 10';
		position: absolute;
		top: 20px;
		right: 20px;
		padding: 10px 20px;
		cursor: pointer;
		border: 3px solid #000000;
		border-radius: 50px;
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(4.3px);
		transition: all 0.2s ease;
	}
	@media (max-width: 755px) {
		.sulje-nappi {
			padding: 5px 10px;
		}
	}
	@media (max-width: 390px) {
		.sulje-nappi {
			right: 0px;
			top: 10px;
		}
	}
</style>
