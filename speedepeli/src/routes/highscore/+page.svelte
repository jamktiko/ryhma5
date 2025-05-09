<script lang="ts">
	import { lista } from '$lib/components/highscore.svelte.js';
	import { lista2 } from '$lib/components/highscore.svelte.js';
	let highscores = $derived($lista);
	type GameModes = 'classic' | 'ajoitettu';
	let gameMode = $state('classic');
	function orderList(a: number, b: number) {
		return b - a;
	}
	function sorted() {
		highscores.sort();
		highscores.sort(orderList);
		highscores = highscores.slice(0, 10); // Järjestetään korkeimmat kymmenen pistettä
		return highscores;
	}
	sorted();
	let highscores2 = $derived($lista2);

	function sorted2() {
		highscores2.sort();
		highscores2.sort(orderList);
		highscores2 = highscores2.slice(0, 10); // Järjestetään korkeimmat kymmenen pistettä
		return highscores2;
	}
	sorted2();
</script>

<h1>Gamemodes</h1>
<select bind:value={gameMode}>
	<option value="classic">Classic</option>
	<option value="ajoitettu">Ajoitettu</option>
</select>
<div data-layer="Highscores" class="highscores_01">
	<div data-layer="tausta" class="tausta"></div>
	<div data-layer="Highscores:" class="highscores">
		<span class="highscores_span">Highscores:</span>
	</div>
	<div data-layer="1000" class="text-1000">
		{#if gameMode === 'classic'}
			<span class="f000_span">
				{#each highscores as score}
					<div class="highscore">
						<p class="pTeksti">{score}</p>
					</div>
				{/each}</span
			>
		{/if}
		{#if gameMode === 'ajoitettu'}
			<span class="f000_span">
				{#each highscores2 as score2}
					<div class="highscore">
						<p class="pTeksti">{score2}</p>
					</div>
				{/each}</span
			>
		{/if}
	</div>
	<div data-layer="Rectangle 8" class="rectangle-8"></div>
	<div data-layer="Line 1" class="line-1"></div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	h1 {
		font-family: 'Jersey 10';
	}
	.tausta {
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		position: absolute;
		background: #aeeffc;
	}

	.highscores_span {
		color: black;
		font-size: 50px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.highscores {
		width: 250px;
		height: 105px;
		left: 45%;
		top: 3%;
		position: absolute;
	}
	@media (max-width: 700px) {
		.highscores {
			left: 37%;
		}
	}
	@media (max-width: 400px) {
		.highscores {
			left: 25%;
		}
	}

	.f000_span {
		color: #ff0000;
		font-size: 60px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.text-1000 {
		width: 100px;
		height: 0px;
		left: 50%;
		top: 12%;
		position: absolute;
		text-align: center;
		justify-content: flex-start;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	/*.rectangle-8 {
		width: 1440px;
		height: 171px;
		left: 0px;
		top: 0px;
		position: absolute;
		background: #aeeffc;
	}*/

	.line-1 {
		width: 100%;
		height: 0px;
		left: 0px;
		top: 97px;
		position: absolute;
		outline: 1px black solid;
		outline-offset: -0.5px;
	}

	.highscores_01 {
		width: 100%;
		height: 750px;
		position: relative;
		background: white;
		overflow: hidden;
	}
	.pTeksti {
		margin: 0;
	}
</style>
