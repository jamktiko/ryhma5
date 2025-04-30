<script lang="ts">
	import Modal from './Modal.svelte';
	import { onMount } from 'svelte';
	interface Props {
		hideModal: () => void;
		score: number;
	}

	let { hideModal, score }: Props = $props();
	let rank = $state();
	// Alustetaan rank muuttuja, joka tulee olemaan pelaajan rankki

	interface Rank {
		id: number;
		name: string;
		min_points: number;
		max_points: number;
	}

	onMount(async () => {
		try {
			const response = await fetch('/json/ranks.json');
			if (!response.ok) throw new Error('Failed to fetch ranks');

			const data = await response.json();
			const ranks: Rank[] = data.ranks;

			// Löytää rankin pelaajan pisteiden perusteella
			// Käytetään find-metodia etsimään pelaajan rankki
			const playerRank = ranks.find((r) => score >= r.min_points && score <= r.max_points);

			// Päätä pelaajan rankki ja aseta default-arvo
			rank = playerRank ? playerRank.name : score === 0 ? 'Noviisi' : 'Mestari';
		} catch (error) {
			console.error('Error loading rank:', error);
			rank = 'Rank unavailable';
		}
	});
</script>

<Modal>
	<div data-layer="Classi Gameover alt" class="classi-gameover-alt">
		<div data-layer="Rectangle 1" class="rectangle-1"></div>
		<div data-layer="Game over! Klikkasit väärää väriä!" class="game-over-klikkasit-vr-vri">
			<span class="gameoverklikkasitvrvri_span">Game over!<br />Klikkasit väärää väriä!</span>
		</div>
		<div data-layer="Line 1" class="line-1"></div>
		<div data-layer="sulje-nappi" data-size="48" class="sulje-nappi">
			<div data-svg-wrapper data-layer="Icon" class="icon">
				<svg
					width="51"
					height="51"
					viewBox="0 0 51 51"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M48.25 2.75L2.75 48.25M2.75 2.75L48.25 48.25"
						stroke="var(--Icon-Default-Default, #1E1E1E)"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
		<div data-layer="score counter" class="score-counter"></div>
		<div data-layer="1000" class="text-1000">
			<span class="f000_span"
				><div class="game-rank"><p>{score}</p></div>
				<br /></span
			>
		</div>
		<div data-layer="score" class="score"><span class="score_span">score</span></div>
		<div data-layer="score counter" class="score-counter_01"></div>
		<div data-layer="1000" class="text-1000_01">
			<span class="f000_01_span"><div class="game-rank"><p>{rank}</p></div></span>
		</div>
		<div data-layer="Rank:" class="rank"><span class="rank_span">Rank:</span></div>
	</div>

	{#snippet footer()}
		<button class="sulje-nappi" onclick={hideModal}>X</button>
		<button
			class="ressu-nappi"
			onclick={() => {
				hideModal();
			}}>Restart</button
		>
	{/snippet}
</Modal>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	.rectangle-1 {
		width: 600px;
		height: 600px;
		left: 0px;
		top: 0px;
		position: absolute;
		background: #00d4ff;
		border-radius: 5px;
		border: 5px white solid;
	}

	.gameoverklikkasitvrvri_span {
		color: black;
		font-size: 96px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}

	.game-over-klikkasit-vr-vri {
		width: 600px;
		height: 499px;
		left: 0px;
		top: 96px;
		position: absolute;
		text-align: center;
	}

	.line-1 {
		width: 590px;
		height: 0px;
		left: 5px;
		top: 97px;
		position: absolute;
		outline: 1px black solid;
		outline-offset: -0.5px;
	}

	.score-counter {
		width: 191px;
		height: 104px;
		left: 37px;
		top: 464px;
		position: absolute;
		background: rgba(245.68, 128.51, 128.51, 0.75);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
		border: 1px black solid;
	}

	.f000_span {
		color: #ff0000;
		font-size: 90px;
		font-family: 'Jersey 10';
		font-weight: 400;
		letter-spacing: 3.84px;
		word-wrap: break-word;
	}

	.text-1000 {
		width: 191px;
		height: 472px;
		left: 37px;
		top: 335px;
		position: absolute;
		text-align: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	.score_span {
		color: rgba(0, 0, 0, 0.63);
		font-size: 48px;
		font-family: Jersey 10;
		font-weight: 400;
		letter-spacing: 0.96px;
		word-wrap: break-word;
	}

	.score {
		left: 82px;
		top: 413px;
		position: absolute;
	}

	.score-counter_01 {
		width: 191px;
		height: 104px;
		left: 359px;
		top: 464px;
		position: absolute;
		background: rgba(245.68, 128.51, 128.51, 0.75);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
		border: 1px black solid;
	}

	.f000_01_span {
		color: #ff0000;
		font-size: 48px;
		font-family: 'Jersey 10';
		font-weight: 400;
		letter-spacing: 1.44px;
		word-wrap: break-word;
	}

	.text-1000_01 {
		width: 191px;
		height: 311px;
		left: 359px;
		top: 364px;
		position: absolute;
		text-align: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	.rank_span {
		color: rgba(0, 0, 0, 0.63);
		font-size: 48px;
		font-family: 'Jersey 10';
		font-weight: 400;
		letter-spacing: 0.96px;
		word-wrap: break-word;
	}

	.rank {
		left: 404px;
		top: 413px;
		position: absolute;
	}

	/* .icon {
		left: 22.75px;
		top: 22.75px;
		position: absolute;
	} */

	.sulje-nappi {
		width: 80px;
		height: 80px;
		left: 504px;
		top: 30px;
		position: absolute;
		overflow: hidden;
		font-size: 50px;
	}

	.ressu-nappi {
		width: 80px;
		height: 80px;
		left: 400px;
		top: 30px;
		position: absolute;
		overflow: hidden;
	}

	.classi-gameover-alt {
		width: 600px;
		height: 600px;
		position: relative;
	}
</style>
