<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { onMount, onDestroy } from 'svelte';
	const colors = ['red', 'blue', 'green', 'yellow'];
	let activeColor = 'red'; // aloitusväri
	let score = 0;
	let lastClicked = ''; // viimeksi klikattu väri
	let intervalId: ReturnType<typeof setInterval>; // tallentaa setIntervalin ID:n, jotta voimme puhdistaa sen myöhemmin
	let gameSpeed = 3000; // kertoo pelin nopeuden, kuinka usein väri vaihtuu (2 sekuntia)
	let gameOver = false; // peli päättynyt -tilamuuttuja
	let clickedThisRound = false; // tarkistaa, onko pelaaja klikannut väriä tällä kierroksella

	function setRandomColor() {
		clickedThisRound = false; // Nollaa klikkaustila ennen uuden värin asettamista
		const randomIndex = Math.floor(Math.random() * colors.length);
		activeColor = colors[randomIndex];
		console.log('Active color:', activeColor);
	}

	function handleClick(color: string) {
		if (gameOver) return; // Jos peli on päättynyt, ei tehdä mitään
		console.log('klikattu', color);
		lastClicked = color;
		clickedThisRound = true; // Pelaaja on klikannut väriä tällä kierroksella
		if (color === activeColor) {
			score += 1;
			console.log('Oikein! Pisteet: ' + score);
			clearInterval(intervalId);
			setRandomColor();
			startInterval();
		} else {
			triggerGameOver();
		}
	}
	function startInterval() {
		intervalId = setInterval(() => {
			if (!clickedThisRound) {
				// Jos ei klikattu ennen ajan loppumista
				triggerGameOver();
			} else {
				setRandomColor();
			}
		}, gameSpeed);
	}
	function triggerGameOver() {
		clearInterval(intervalId);
		gameOver = true;
		console.log('Game Over!');
	}
	function restartGame() {
		score = 0;
		gameOver = false;
		lastClicked = '';
		setRandomColor();
		startInterval();
	}
	// Start the game when component is mounted
	onMount(() => {
		// Set initial random color
		setRandomColor();

		// Start interval to change colors
		intervalId = setInterval(() => {
			setRandomColor();
		}, gameSpeed);

		// Clean up interval when component is destroyed
		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="game-container">
	{#if gameOver}
		<div class="game-over">
			<h2>Hävisit! pisteet:{score}</h2>
			<button onclick={restartGame}>Restart</button>
		</div>
	{:else}
		<div class="score-display">
			<h2>Score: {score}</h2>
			<p>Active color: {activeColor}</p>
		</div>
		<div class="button-container">
			<Button color="red" active={activeColor === 'red'} onClick={() => handleClick('red')} />
			<Button color="blue" active={activeColor === 'blue'} onClick={() => handleClick('blue')} />
			<Button color="green" active={activeColor === 'green'} onClick={() => handleClick('green')} />
			<Button
				color="yellow"
				active={activeColor === 'yellow'}
				onClick={() => handleClick('yellow')}
			/>
		</div>
	{/if}
</div>

<style>
	.game-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.score-display {
		margin-bottom: 20px;
		text-align: center;
	}

	.button-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 250px;
	}
</style>
