<script lang="ts">
	import Modal from './Modal.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	interface Props {
		hideModal: () => void;
		score: number;
		clickedThisRound: boolean;
	}

	let { hideModal, score, clickedThisRound }: Props = $props(); //
	let rank = $state(); // Pelaajan rankki

	function returnHome() {
		hideModal(); // Sulje modal
		goto('/'); // Siirry etusivulle
	}

	interface Rank {
		id: number;
		name: string;
		min_points: number;
		max_points: number;
	}
	let response: Response; // alustetaan response
	onMount(async () => {
		// katsotaan ensin kummassa pelissä ollaan
		try {
			if ($page.url.pathname === '/peli') {
				response = await fetch('/json/ranks.json');
			} else if ($page.url.pathname === '/peli2') {
				response = await fetch('/json/ranksAjoitettu.json');
			}
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
			{#if !clickedThisRound}
				<span class="gameoverklikkasitvrvri_span">Game over!<br />Aika loppui!</span>
			{/if}
			{#if clickedThisRound}
				<span class="gameoverklikkasitvrvri_span">Game over!<br />Klikkasit väärää väriä!</span>
			{/if}
		</div>
		<div data-layer="Line 1" class="line-1"></div>
		<!-- <div data-layer="sulje-nappi" data-size="48" class="sulje-nappi">
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
		</div> -->
		<div data-layer="score counter" class="score-counter"></div>
		<div data-layer="1000" class="text-1000">
			<span class="f000_span"
				><div class="game-rank"><p>{score}</p></div>
				<br /></span
			>
		</div>
		<div data-layer="score" class="score"><span class="score_span">Score:</span></div>
		<div data-layer="score counter" class="score-counter_01"></div>
		<div data-layer="1000" class="text-1000_01">
			<span class="f000_01_span"><div class="game-rank"><p>{rank}</p></div></span>
		</div>
		<div data-layer="Rank:" class="rank"><span class="rank_span">Rank:</span></div>
	</div>

	<button class="sulje-nappi" onclick={returnHome}>X</button>
	<button
		class="ressu-nappi"
		onclick={() => {
			hideModal();
		}}>Restart</button
	>
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
	@media (max-width: 700px) {
		.rectangle-1 {
			width: 400px;
		}
	}
	@media (max-width: 445px) {
		.rectangle-1 {
			width: 350px;
			left: 0px;
		}
	}
	@media (max-width: 370px) {
		.rectangle-1 {
			width: 250px;
		}
	}
	.gameoverklikkasitvrvri_span {
		color: black;
		font-size: 96px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}
	@media (max-width: 700px) {
		.gameoverklikkasitvrvri_span {
			font-size: 80px;
		}
	}
	@media (max-width: 445px) {
		.gameoverklikkasitvrvri_span {
			font-size: 70px;
		}
	}
	@media (max-width: 370px) {
		.gameoverklikkasitvrvri_span {
			font-size: 60px;
		}
	}

	.game-over-klikkasit-vr-vri {
		width: 600px;
		height: 499px;
		left: 0px;
		top: 96px;
		position: absolute;
		text-align: center;
	}
	@media (max-width: 700px) {
		.game-over-klikkasit-vr-vri {
			left: 5px;
			width: 400px;
		}
	}
	@media (max-width: 445px) {
		.game-over-klikkasit-vr-vri {
			width: 340px;
			left: 10px;
		}
	}
	@media (max-width: 370px) {
		.game-over-klikkasit-vr-vri {
			width: 240px;
			left: 10px;
		}
	}
	.line-1 {
		width: 600px;
		height: 0px;
		left: 5px;
		top: 97px;
		position: absolute;
		outline: 1px black solid;
		outline-offset: -0.5px;
	}
	@media (max-width: 700px) {
		.line-1 {
			width: 399px;
			left: 5px;
		}
	}
	@media (max-width: 445px) {
		.line-1 {
			width: 348px;
			left: 6px;
		}
	}
	@media (max-width: 370px) {
		.line-1 {
			width: 249px;
			left: 5px;
		}
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
	@media (max-width: 700px) {
		.score-counter {
			left: 10px;
			width: 100px;
			height: 50px;
		}
	}
	@media (max-width: 445px) {
		.score-counter {
			left: 10px;
		}
	}
	@media (max-width: 370px) {
		.score-counter {
			left: 10px;
		}
	}

	.f000_span {
		color: #ff0000;
		font-size: 90px;
		font-family: 'Jersey 10';
		font-weight: 400;
		letter-spacing: 3.84px;
		word-wrap: break-word;
	}
	@media (max-width: 700px) {
		.f000_span {
			font-size: 60px;
		}
	}
	@media (max-width: 445px) {
		.f000_span {
			font-size: 60px;
		}
	}
	@media (max-width: 370px) {
		.f000_span {
			font-size: 60px;
		}
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
	@media (max-width: 700px) {
		.text-1000 {
			left: -30px;
			top: 287px;
		}
	}
	@media (max-width: 445px) {
		.text-1000 {
			left: -35px;
		}
	}
	@media (max-width: 370px) {
		.text-1000 {
			left: -30px;
		}
	}

	.score_span {
		color: rgba(0, 0, 0, 0.63);
		font-size: 48px;
		font-family: 'Jersey 10';
		font-weight: 400;
		letter-spacing: 0.96px;
		word-wrap: break-word;
	}

	.score {
		left: 82px;
		top: 413px;
		position: absolute;
	}

	@media (max-width: 700px) {
		.score {
			left: 10px;
		}
	}
	@media (max-width: 445px) {
		.score {
			left: 10px;
		}
	}
	@media (max-width: 370px) {
		.score {
			left: 10px;
		}
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
	@media (max-width: 700px) {
		.score-counter_01 {
			left: 245px;
			width: 150px;
			height: 50px;
		}
	}
	@media (max-width: 445px) {
		.score-counter_01 {
			width: 125px;
			left: 220px;
		}
	}
	@media (max-width: 370px) {
		.score-counter_01 {
			width: 100px;
			left: 150px;
		}
	}

	.f000_01_span {
		color: #ff0000;
		font-size: 40px;
		font-family: 'Jersey 10';
		font-weight: 400;
		letter-spacing: 1.44px;
		word-wrap: break-word;
	}
	@media (max-width: 700px) {
		.f000_01_span {
			font-size: 30px;
		}
	}
	@media (max-width: 445px) {
		.f000_01_span {
			font-size: 24px;
		}
	}
	@media (max-width: 370px) {
		.f000_01_span {
			font-size: 18px;
		}
	}

	.text-1000_01 {
		width: 191px;
		height: 311px;
		left: 361px;
		top: 364px;
		position: absolute;
		text-align: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 700px) {
		.text-1000_01 {
			left: 226px;
			top: 335px;
		}
	}
	@media (max-width: 445px) {
		.text-1000_01 {
			left: 190px;
		}
	}
	@media (max-width: 370px) {
		.text-1000_01 {
			left: 105px;
		}
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
	@media (max-width: 700px) {
		.rank {
			left: 245px;
		}
	}
	@media (max-width: 445px) {
		.rank {
			left: 220px;
		}
	}
	@media (max-width: 370px) {
		.rank {
			left: 150px;
		}
	}

	/* .icon {
		left: 22.75px;
		top: 22.75px;
		position: absolute;
	} */

	.sulje-nappi {
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		border: 3px solid #000000;
		border-radius: 14px;
		color: black;
		font-family: 'Jersey 10';
		font-size: 45px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: all 0.2s ease;
		position: flex;
		text-decoration: none;
		width: 80px;
		height: 80px;
		left: 524px;
		top: 15px;
		border-radius: 50px;
		position: absolute;
		overflow: hidden;
	}
	@media (max-width: 700px) {
		.sulje-nappi {
			left: 324px;
		}
	}
	@media (max-width: 445px) {
		.sulje-nappi {
			left: 254px;
		}
	}
	@media (max-width: 370px) {
		.sulje-nappi {
			left: 154px;
		}
	}

	.sulje-nappi:hover {
		background: linear-gradient(180deg, #ff7777 0%, #e66666 50%, #aa4444 100%);
		transform: translateY(-2px);
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
	}

	.sulje-nappi:active {
		background: linear-gradient(180deg, #d55151 0%, #993a3a 50%, #772222 100%);
		transform: translateY(1px);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	}
	.ressu-nappi {
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		border: 3px solid #000000;
		border-radius: 14px;
		color: black;
		font-family: 'Jersey 10';
		font-size: 25px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: all 0.2s ease;
		position: flex;
		text-decoration: none;
		width: 80px;
		height: 80px;
		left: 4px;
		top: 15px;
		border-radius: 50px;
		position: absolute;
		overflow: hidden;
	}
	@media (max-width: 700px) {
		.ressu-nappi {
			left: 5px;
		}
	}
	@media (max-width: 445px) {
		.ressu-nappi {
			left: -16px;
		}
	}
	@media (max-width: 370px) {
		.ressu-nappi {
			left: -15px;
		}
	}
	.ressu-nappi:hover {
		background: linear-gradient(180deg, #ff7777 0%, #e66666 50%, #aa4444 100%);
		transform: translateY(-2px);
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
	}

	.ressu-nappi:active {
		background: linear-gradient(180deg, #d55151 0%, #993a3a 50%, #772222 100%);
		transform: translateY(1px);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	}

	.classi-gameover-alt {
		width: 600px;
		height: 600px;
		position: relative;
	}
	@media (max-width: 700px) {
		.classi-gameover-alt {
			width: 400px;
		}
	}
	@media (max-width: 445px) {
		.classi-gameover-alt {
			width: 320px;
			left: -20px;
		}
	}
	@media (max-width: 370px) {
		.classi-gameover-alt {
			width: 220px;
			left: -20px;
		}
	}
</style>
