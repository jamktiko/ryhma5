<script lang="ts">
	import { page } from '$app/stores';
	import About from '$lib/components/About.svelte';
	let showAbout = $state(false);
</script>

<div data-layer="Start Game" class="start-game">
	<div data-layer="Rectangle 8" class="rectangle-8"></div>
	<div data-layer="Rectangle 8" class="rectangle-8_01"></div>
	<div data-layer="Start Game" class="start-game_01">
		<span class="startgame_01_span"
			><a href="/peli" class:is-active={$page.url.pathname === '/peli'}>Pelaa</a></span
		>
	</div>
	<div data-layer="Rectangle 9" class="rectangle-9"></div>
	<div data-layer="Highscores" class="highscores">
		<span class="highscores_span"
			><a href="/highscore" class:is-active={$page.url.pathname === '/highscore'}>Highscore</a
			></span
		>
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
		<button class="about" onclick={() => (showAbout = true)}>i</button>
		{#if showAbout}
			<About hideModal={() => (showAbout = false)} />
		{/if}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	.rectangle-8 {
		width: 1440px;
		height: 1024px;
		left: 0px;
		top: 0px;
		position: absolute;
		background: #aeeffc;
	}

	.rectangle-8_01 {
		width: 334px;
		height: 142px;
		left: 553px;
		top: 370px;
		position: absolute;
		background: #ff6161;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 14px;
		border: 1px black solid;
	}

	.startgame_01_span {
		color: black;
		font-size: 64px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.start-game_01 {
		width: 254px;
		height: 62px;
		left: 593px;
		top: 410px;
		position: absolute;
	}

	.rectangle-9 {
		width: 334px;
		height: 142px;
		left: 553px;
		top: 576px;
		position: absolute;
		background: #ff6161;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 14px;
		border: 1px black solid;
	}

	.highscores_span {
		color: black;
		font-size: 60px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.highscores {
		width: 249px;
		height: 62px;
		left: 595px;
		top: 616px;
		position: absolute;
	}

	.start-game {
		width: 1440px;
		height: 1024px;
		position: relative;
		background: white;
		overflow: hidden;
	}

	.info_01 {
		left: 4px;
		top: 5px;
		position: absolute;
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
		position: absolute;
		left: 1280px;
		top: 5px;
		background: linear-gradient(180.58deg, #fe4545 40.5%, #f20c0c 54.6%, #990000 89.86%);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.63);
		backdrop-filter: blur(4.3px);
		font-size: 50px;
	}
</style>
