<script lang="ts">
	import { page } from '$app/stores';
	import About from '$lib/components/About.svelte';
	import Pelaa from '$lib/components/Pelaa.svelte';
	//import {showModalAloitus} from '$lib/components/highscore.svelte';

	let showAbout = $state(false);
	let hidePelaa = $state(false);
	let isDisabled = $state(false);

	function modalAuki() {
		hidePelaa = true;
		isDisabled = true;
	}
	function modalSulje() {
		hidePelaa = false;
		isDisabled = false;
	}
</script>

<div data-layer="Start Game" class="start-game">
	<div data-layer="Rectangle 8" class="rectangle-8"></div>

	<div data-layer="Start Game" class="start-game_01">
		<span class="startgame_01_span">
			<!-- <a href="/peli" class:is-active={$page.url.pathname === '/peli'}>Pelaa</a> -->
			<button class="custom-button" onclick={modalAuki}  disabled={isDisabled}>Pelaa</button>
			{#if hidePelaa}
				<Pelaa hidePelaa={modalSulje} />
			{/if}
		</span>
	</div>
	<div data-layer="Highscores" class="highscores">
		<span class="highscores_span">
			{#if !isDisabled}
			<a href="/highscore" class="custom-button">Highscore</a>
			{:else}
			<p class="custom-button">Highscore</p>
			{/if}
			</span>
	</div>
	<!-- <div data-layer="Info" class="info">
		<div data-svg-wrapper data-layer="Ellipse 1" class="ellipse-1">
			<svg
				width="57"
				height="57"
				viewBox="0 0 57 57"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="28.5" cy="28.5" r="28.5" fill="white" />
			</svg>
		</div> -->
	<div data-svg-wrapper data-layer="Info" data-size="48" class="info_01">
		<button class="about" onclick={() => (showAbout = true)} disabled={isDisabled}>i</button>
		{#if showAbout}
			<About hideModal={() => (showAbout = false)} />
		{/if}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
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

	.rectangle-8 {
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		/* position: absolute; */
		background: #aeeffc;
	}

	.startgame_01_span {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.start-game_01 {
		width: 100%;
		height: 100px;
		/* left: 593px; */
		top: 135px;
		position: absolute;
		display: flex;
	}


	.highscores_span {
		color: black;
		font-size: 60px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.highscores {
		width: 100%;
		height: 62px;
		/* left: 595px; */
		top: 340px;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.start-game {
		width: 100%;
		height: 500px;
		position: relative;
		background: white;
		overflow: hidden;
	}

	/* .ellipse-1 {
		left: 0px;
		top: 0px;
		position: absolute;
	} */

	/*.info {
		width: 57px;
		height: 57px;
		position: relative;
	}*/
	.about {
		width: 80px;
		height: 80px;
		border-radius: 50px;
		margin-right: 10%;
		left: 90%;
		top: 5px;
		position: absolute;
		background: linear-gradient(180.58deg, #fe4545 40.5%, #f20c0c 54.6%, #990000 89.86%);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.63);
		backdrop-filter: blur(4.3px);
		font-size: 50px;
	}
	@media (max-width: 1000px) {
		.about {
			width: 60px;
			height: 60px;
			font-size: 12;
		}
	}
	@media (max-width: 600px) {
		.about {
			width: 40px;
			height: 40px;
			font-size: 25px;
		}
	}
</style>
