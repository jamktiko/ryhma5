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
		const randomIndex = Math.floor(Math.random() * colors.length); // satunnainen indeksi väreistä
		activeColor = colors[randomIndex]; // satunnainen väri
		console.log('Active color:', activeColor); // debuggaus
	}

	function handleClick(color: string) { 
		if (gameOver) return; // Jos peli on päättynyt, ei tehdä mitään
		console.log('klikattu', color);
		lastClicked = color; // viimeksi klikattu väri
		clickedThisRound = true; // Pelaaja on klikannut väriä tällä kierroksella
		if (color === activeColor) {
			score += 1;
			console.log('Oikein! Pisteet: ' + score);
			clearInterval(intervalId); // Pysäytä edellinen interval
			setRandomColor(); // Aseta uusi satunnainen väri
			startInterval(); // Aloita uusi interval
		} else {
			triggerGameOver(); // Jos väri on väärä, peli päättyy
		}
	}
	function startInterval() { // Asettaa uuden intervalin, joka vaihtaa väriä
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
	// Aloittaa pelin, kun komponentti on ladattu
	// ja asettaa värit satunnaisesti
	onMount(() => {
		setRandomColor();

		// Asettaa satunnaisen värin ja aloittaa pelin
		intervalId = setInterval(() => {
			setRandomColor();
		}, gameSpeed);

		// Siivoaa intervalin, kun komponentti tuhotaan
		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="game-container">
	{#if gameOver}
		<div class="game-over">
			<h2>HÄVISIT! PISTEET:{score}</h2>
			<button class="restart" onclick={restartGame}>RESTART</button>
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
	}

	.button-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		grid-template-columns: repeat(4, 1fr);
		gap: 5px;
	}
	.game-over {
		font-family: 'Jersey 10';
}
.restart
{
	font-family: 'Jersey 10';
	box-sizing: border-box;
	font-size: medium;

position: absolute;
width: 73px;
height: 49px;
left: 595px;
top: 200px;

background: rgba(246, 129, 129, 0.71);
border: 1px solid #000000;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
