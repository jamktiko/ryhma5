<script lang="ts">
	import { page } from '$app/stores';
	import { showModal1 } from '$lib/components/highscore.svelte.js';
	let { text, logo }: { text: string; logo?: string } = $props();
	// import About from '$lib/components/About.svelte';
	let showModal2 = $derived($showModal1);
	let isPlaying = $state(false);
	let volume = $state(50);

	function play() {
		isPlaying = true;
		//myAudio = new Audio('/audio/mainmenu.mp3');
		//myAudio.loop = true;
		//myAudio.play()
		(document.getElementById('myAudio') as HTMLAudioElement)?.play();
	}
	function pause() {
		isPlaying = false;
		//myAudio.pause();
		(document.getElementById('myAudio') as HTMLAudioElement)?.pause();
	}

	function setVolume(event: Event) {
		const newVolume = (event.target as HTMLInputElement).value;
		(document.getElementById('myAudio') as HTMLAudioElement).volume = parseInt(newVolume) / 100;
	}
</script>

<header>
	<h1>{text}</h1>
	{#if $page.url.pathname !== '/' && !showModal2}
		<nav>
			<a href="/" class="material-symbols-outlined custom-button">home</a>

			<!-- <button onclick={() => (showAbout = true)}>About</button>  -->
		</nav>
	{/if}

	<audio id="myAudio" src="/audio/pelausmusa1.mp3" loop></audio>

	<div class="audiobox">
		<button class="play" onclick={play} disabled={isPlaying}
			><span class="material-symbols-outlined">play_arrow</span></button
		>
		<button class="pause" onclick={pause} disabled={!isPlaying}
			><span class="material-symbols-outlined">pause</span></button
		>
		<input type="range" min="0" max="100" step="1" bind:value={volume} oninput={setVolume} />
	</div>
	<!-- {#if showAbout}
  <About hideModal={() => (showAbout = false)} />
{/if} -->
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	h1 {
		position: flex;
		color: #ff3e00;
		font-size: 2em;
		text-align: center;
		margin: 0;
		font-family: 'Jersey 10';
		font-style: normal;
		font-weight: 400;
		font-size: 128px;
		line-height: 137px;
		letter-spacing: 0.02em;
		color: #000000;
		text-shadow: 0px 4px 9.3px rgba(255, 0, 0, 0.25);
	}

	/* @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap'); */
	.custom-button {
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		border: 3px solid #000000;
		border-radius: 8px;
		color: black;
		/* font-family: 'Jersey 10', sans-serif; */
		/* font-size: 20px; */
		padding: 5px 10px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: all 0.2s ease;
		position: absolute;
		display: flex;
		top: 60px;
		text-decoration: none;
	}
	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 40;
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
	.audiobox {
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		border: 2px solid #000000;
		border-radius: 8px;
		color: black;
		padding: 5px -5px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		position: absolute;
		display: flex;
		top: 110px;
		text-decoration: none;
	}
	.play,
	.pause {
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		border: 0px solid #000000;
		border-radius: 8px;
		color: black;
		padding: 5px -5px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.pause:hover {
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
		transform: none;
	}
	.pause:active {
		background: linear-gradient(180deg, #72727247 0%, #8e8e8e1f 50%, #8b8b8b24 100%);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	}

	.play:hover {
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
		transform: none;
	}

	.play:active {
		background: linear-gradient(180deg, #72727247 0%, #8e8e8e1f 50%, #8b8b8b24 100%);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 850px) {
		h1 {
			font-size: 100px;
		}
		.custom-button {
			font-size: 20px;
		}
	}
	@media (max-width: 700px) {
		h1 {
			font-size: 70px;
		}
		.custom-button {
			font-size: 20px;
		}
	}
	@media (max-width: 480px) {
		h1 {
			font-size: 40px;
		}
	}
	@media (max-height: 560px) {
		h1 {
			display: none;
		}
		.custom-button {
			font-size: 20px;
			top: 70px;
			left: 100px;
		}
		.audiobox {
			top: 28px;
			left: 100px;
		}
	}
</style>
