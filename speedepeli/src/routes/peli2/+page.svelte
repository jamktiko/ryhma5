<script lang="ts">
	import { lista2 } from '$lib/components/highscore.svelte.js';
	import Button from '$lib/components/Button.svelte';
	import GameOver from '$lib/components/GameOver.svelte';
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
	let intervalId: ReturnType<typeof setInterval>;
	let gameSpeed = $state(1500); // Slightly faster base speed for time attack mode
	let gameOver = false;
	let clickedThisRound = $state(false);
	let showModal = $state(false);
	let highscoreList: number[] = $derived($lista2);

	// Timer mode variables
	let gameDuration = 30; // Game lasts 30 seconds
	let timeRemaining = $state(gameDuration);
	let timerInterval: ReturnType<typeof setInterval>;

	// Countdown variables
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
	}

	function setRandomColor() {
		clickedThisRound = false;
		const randomIndex = Math.floor(Math.random() * colors.length);
		activeColor = colors[randomIndex];
	}

	function handleClick(color: string) {
		if (gameOver || isCountingDown) return;
		console.log('klikattu', color);
		lastClicked = color;
		if (color === activeColor) {
			// Correct color clicked
			score += 1;
			console.log('Oikein! Pisteet: ' + score);
		} else {
			// Wrong color clicked but no penalty in this mode
			console.log('Väärä väri, mutta jatketaan!');
		}
		// Always change to a new color after click, regardless of whether it was correct
		setRandomColor();
	}

	function startGameTimer() {
		timeRemaining = gameDuration;
		timerInterval = setInterval(() => {
			timeRemaining -= 1;
			if (timeRemaining <= 0) {
				// Time's up - end the game
				endGame();
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

				// Start the game timer
				startGameTimer();

				// Set initial color
				setRandomColor();
			}
		}, 1000);
	}

	function endGame() {
		clearInterval(timerInterval);
		gameOver = true;
		showModal = true;
		console.log("Time's up! Final score: " + score);

		// Save score to highscore list
		highscoreList.push(score);
		lista2.set(highscoreList);
	}

	function restartGame() {
		score = 0;
		gameOver = false;
		showModal = false;
		lastClicked = '';

		// Start the countdown again
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
			<p>Time Attack Mode</p>
			<p>Get as many points as possible in 30 seconds!</p>
		</div>
	{:else}
		<div class="score-display">
			<h2>Score: {score}</h2>
			<div class="timer">Time: {timeRemaining}s</div>
			<p>Active color: {activeColor}</p>
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
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 5px;
	}

	.countdown-display {
		font-family: 'Jersey 10';
		font-size: 50px;
		text-align: center;
	}

	.countdown-display p {
		font-size: 30px;
		margin: 10px 0;
	}
</style>
