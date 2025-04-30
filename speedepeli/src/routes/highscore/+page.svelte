<script lang="ts">
	import { lista } from '$lib/components/highscore.svelte.js';
	let highscores = $derived($lista);
	function orderList(a: number, b: number) {
		return b - a;
	}
	function sorted() {
		highscores.sort();
		highscores.sort(orderList);
		return highscores;
	}
	sorted();
</script>

<div data-layer="Highscores" class="highscores_01">
	<div data-layer="tausta" class="tausta"></div>
	<div data-layer="Highscores:" class="highscores">
		<span class="highscores_span">Highscores:</span>
	</div>
	<div data-layer="1000" class="text-1000">
		<span class="f000_span"
			>{#each highscores as score}
				<div class="highscore">
					<p>{score}</p>
				</div>
			{/each}</span
		>
	</div>
	<div data-layer="Rectangle 8" class="rectangle-8"></div>
	<div data-svg-wrapper data-layer="Line 2" class="line-2">
		<svg
			width="1440"
			height="2"
			viewBox="0 0 1440 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 1L1440 1.00013" stroke="black" />
		</svg>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	.tausta {
		width: 1440px;
		height: 1024px;
		left: 0px;
		top: 0px;
		position: absolute;
		background: #00d4ff;
	}

	.highscores_span {
		color: black;
		font-size: 80px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.highscores {
		width: 387px;
		height: 105px;
		left: 520px;
		top: 201px;
		position: absolute;
	}

	.f000_span {
		color: #ff0000;
		font-size: 60px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.text-1000 {
		width: 387px;
		height: 105px;
		left: 520px;
		top: 406px;
		position: absolute;
		text-align: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	.rectangle-8 {
		width: 1440px;
		height: 171px;
		left: 0px;
		top: 0px;
		position: absolute;
		background: #aeeffc;
	}

	.line-2 {
		left: 0px;
		top: 305px;
		position: absolute;
	}

	.highscores_01 {
		width: 1440px;
		height: 1024px;
		position: relative;
		background: white;
		overflow: hidden;
	}
</style>
