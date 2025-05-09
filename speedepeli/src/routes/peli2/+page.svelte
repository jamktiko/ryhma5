<script lang="ts">
	import { lista2 } from '$lib/components/highscore.svelte.js';
	import Button from '$lib/components/Button.svelte';
	import GameOver from '$lib/components/GameOver.svelte';
	import {showModal1} from '$lib/components/highscore.svelte.js'
	import { onMount, onDestroy } from 'svelte';
	const colors = ['red', 'blue', 'green', 'yellow'];
	const keyMappings = {
		a: 'red',
		s: 'yellow',
		d: 'green',
		f: 'blue'
	};
	let activeColor = $state('red');
	let score = $state(0);
	let lastClicked = '';
	let gameOver = false;
	let clickedThisRound = $state(false);
	let showModal = $state(false);
	let highscoreList: number[] = $derived($lista2);

	// Time attack muuttujat
	let gameDuration = 30; // Pelin kesto sekunteina
	let timeRemaining = $state(gameDuration); // jäljellä oleva aika
	let timerInterval: ReturnType<typeof setInterval>; // ajastin, joka vähentää aikaa

	// countdown muuttujat
	let countdownValue = $state(3);
	let isCountingDown = $state(true);
	let countdownInterval: ReturnType<typeof setInterval>;

	function handleKeyPress(event: KeyboardEvent) {
		if (gameOver || isCountingDown) return;
		const key = event.key.toLowerCase();
		if (key in keyMappings) {
			const color = keyMappings[key as keyof typeof keyMappings];
			handleClick(color);
		}
	}

	function hideModal() {
		showModal = false;
		showModal1.set(false);
	}

	function setRandomColor() {
		// Aseta satunnainen väri
		clickedThisRound = false; // Nollaa klikkaustila ennen uuden värin asettamista
		const randomIndex = Math.floor(Math.random() * colors.length); // satunnainen indeksi väreistä
		activeColor = colors[randomIndex]; // satunnainen väri
	}

	function handleClick(color: string) {
		if (gameOver || isCountingDown) return;
		console.log('klikattu', color);
		lastClicked = color;
		if (color === activeColor) {
			score += 1;
			console.log('Oikein! Pisteet: ' + score);
		} else {
			score = Math.max(0, score - 1); // Vähennä pistettä, jos väärä väri, mutta älä mene alle nollan
			console.log('Väärä väri, mutta jatketaan!');
		}
		setRandomColor(); // Aseta uusi väri riippumatta oliko klikkaus oikea vai väärä
	}

	function startGameTimer() {
		// Aloita peliaika
		timeRemaining = gameDuration;
		timerInterval = setInterval(() => {
			timeRemaining -= 1;
			if (timeRemaining <= 0) {
				endGame(); // Peli päättyy
			}
		}, 1000);
	}

	function startCountdown() {
		isCountingDown = true;
		countdownValue = 3;

		clearInterval(countdownInterval);

		countdownInterval = setInterval(() => {
			countdownValue--;

			if (countdownValue <= 0) {
				clearInterval(countdownInterval);
				isCountingDown = false;

				startGameTimer(); // Aloita peliaika
				setRandomColor(); // Aseta ensimmäinen väri
			}
		}, 1000);
	}

	function endGame() {
		// Peli päättyy
		clearInterval(timerInterval); // Pysäytä ajastin
		gameOver = true;
		showModal = true;
		showModal1.set(true);
		console.log("Time's up! Final score: " + score);
		highscoreList.push(score);
		lista2.set(highscoreList); // päivittää highscore-listan
	}
	function restartGame() {
		score = 0;
		gameOver = false;
		showModal = false;
		showModal1.set(false);
		lastClicked = '';

		startCountdown();
	}

	onMount(() => {
		startCountdown();

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			clearInterval(timerInterval);
			clearInterval(countdownInterval);
			window.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

<div class="game-container">
	{#if isCountingDown}
		<div class="countdown-display">
			<h1>{countdownValue}</h1>
			<p>Time Attack!</p>
			<p>Koita saada mahdollisimman monta pistettä 30 sekunnissa!</p>
		</div>
	{:else}
		<div class="score-display">
			<h2>Score: {score}</h2>
			<div class="timer">Time: {timeRemaining}s</div>
			<!-- <p>Active color: {activeColor}</p> -->
		</div>
		<div class="button-container">
			<Button
				color="#F70000"
				active={activeColor === 'red'}
				onClick={() => handleClick('red')}
				keyLabel="A"
			/>
			<Button
				color="yellow"
				active={activeColor === 'yellow'}
				onClick={() => handleClick('yellow')}
				keyLabel="S"
			/>
			<Button
				color="#00FF00"
				active={activeColor === 'green'}
				onClick={() => handleClick('green')}
				keyLabel="D"
			/>
			<Button
				color="#00F7FF"
				active={activeColor === 'blue'}
				onClick={() => handleClick('blue')}
				keyLabel="F"
			/>
		</div>
	{/if}
</div>

{#if showModal}
	<GameOver
		{score}
		clickedThisRound={false}
		hideModal={() => {
			hideModal();
			restartGame();
		}}
	/>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
	.game-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		background: rgba(107, 226, 250, 0.55);
		border-radius: 80px;
		border-color: blueviolet;
		border-style: groove;
		border-width: 20px;
	}

	.score-display {
		margin-bottom: 20px;
		text-align: center;
		font-family: 'Jersey 10';
		font-size: 25px;
	}

	.timer {
		font-size: 32px;
		font-weight: bold;
		color: #ff3e00;
		margin: 10px 0;
	}

	.button-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center; }

	.countdown-display {
		font-family: 'Jersey 10';
		font-size: 50px;
		text-align: center;
	}

	.countdown-display p {
		font-size: 30px;
		margin: 10px 0;
	}

	@media (max-width:600px) {
		.score-display, .timer {
			font-size: 15px;
		}
	}
</style>
