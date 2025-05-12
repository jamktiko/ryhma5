<script lang="ts">
	import { lista } from '$lib/components/highscore.svelte.js';
	import Button from '$lib/components/Button.svelte';
	import GameOver from '$lib/components/GameOver.svelte';
	import { showModal1 } from '$lib/components/highscore.svelte.js';
	import { onMount, onDestroy } from 'svelte';
	const colors = ['red', 'blue', 'green', 'yellow'];
	const keyMappings = {
		a: 'red',
		s: 'yellow',
		d: 'green',
		f: 'blue'
	};
	let activeColor = $state('red'); // aloitusväri
	let score = $state(0);
	let lastClicked = ''; // viimeksi klikattu väri
	let intervalId: ReturnType<typeof setInterval>; // tallentaa setIntervalin ID:n, jotta voimme puhdistaa sen myöhemmin
	let gameSpeed = $state(2000); // kertoo pelin nopeuden, kuinka usein väri vaihtuu (2 sekuntia)
	let initialGameSpeed = 2000;
	let speedIncreaseInterval = 10; // pisteet, jonka jälkeen nopeus kasvaa
	let speedDecreaseAmount = 100; // peliaika vähenee 100ms joka kerta, kun pelaaja saa 10 pistettä
	let minGameSpeed = 500; // miniminopeus, jota peli ei alita
	let gameOver = false; // peli päättynyt -tilamuuttuja
	let clickedThisRound = $state(false); // tarkistaa, onko pelaaja klikannut väriä tällä kierroksella
	let showModal = $state(false); // näyttääkö pelin päättymisen jälkeen modalin
	let highscoreList: number[] = $derived($lista); // highscore lista

	// ääniä
	const nappiAudio = new Audio('/audio/oikeanappi.wav');
	const vaaraNappiAudio = new Audio('/audio/vaaranappi.wav');
	function toistaNappiAudio() {
		nappiAudio.currentTime = 0; // Kelaa ääni alkuun
		nappiAudio.play();
	}
	function toistaVaaranappiAudio() {
		vaaraNappiAudio.currentTime = 0; // Kelaa ääni alkuun
		vaaraNappiAudio.play();
	}

	//countdown muuttujat
	let countdownValue = $state(3); // aloituslaskuri
	let isCountingDown = $state(true); // onko laskuri käynnissä
	let countdownInterval: ReturnType<typeof setInterval>; // tallentaa setIntervalin ID:n laskurille

	function handleKeyPress(event: KeyboardEvent) {
		if (gameOver || isCountingDown) return; // Jos peli on päättynyt, ei tehdä mitään
		const key = event.key.toLowerCase(); // Muuta näppäin pieniksi kirjaimiksi
		if (key in keyMappings) {
			const color = keyMappings[key as keyof typeof keyMappings];
			handleClick(color); // Klikkaa väriä, joka vastaa näppäintä
		}
	}

	function hideModal() {
		showModal = false; // sulje modal
		showModal1.set(false);
	}

	function setRandomColor() {
		clickedThisRound = false; // Nollaa klikkaustila ennen uuden värin asettamista
		const randomIndex = Math.floor(Math.random() * colors.length); // satunnainen indeksi väreistä
		activeColor = colors[randomIndex]; // satunnainen väri
		console.log('Active color:', activeColor); // debuggaus
	}

	function handleClick(color: string) {
		if (gameOver || isCountingDown) return; // Jos peli on päättynyt, ei tehdä mitään
		console.log('klikattu', color);
		lastClicked = color; // viimeksi klikattu väri
		clickedThisRound = true; // Pelaaja on klikannut väriä tällä kierroksella
		if (color === activeColor) {
			toistaNappiAudio(); // soita ääni, kun nappia painetaan
			score += 1;
			console.log('Oikein! Pisteet: ' + score);

			if (score % speedIncreaseInterval === 0) {
				// Vähennä aikaväliä kiinteällä määrällä, mutta ei alle minimiajan
				gameSpeed = Math.max(minGameSpeed, gameSpeed - speedDecreaseAmount);
				console.log('Pelin nopeus kasvaa! Uusi aika: ' + gameSpeed + 'ms');
			}
			clearInterval(intervalId); // Pysäytä edellinen interval
			setRandomColor(); // Aseta uusi satunnainen väri
			startInterval(); // Aloita uusi interval
		} else {
			toistaVaaranappiAudio(); // soita ääni, kun väärä nappi painetaan
			triggerGameOver(); // Jos väri on väärä, peli päättyy
		}
	}
	function startInterval() {
		// Asettaa uuden intervalin, joka vaihtaa väriä
		intervalId = setInterval(() => {
			if (!clickedThisRound) {
				// Jos ei klikattu ennen ajan loppumista
				triggerGameOver();
			} else {
				setRandomColor();
			}
		}, gameSpeed);
	}
	function startCountdown() {
		isCountingDown = true;
		countdownValue = 3;

		// Tyhjentää edellisen laskurin varuilta
		clearInterval(countdownInterval);

		// Aloita countdown
		countdownInterval = setInterval(() => {
			countdownValue--;

			if (countdownValue <= 0) {
				clearInterval(countdownInterval);
				isCountingDown = false;
				// Start the actual game
				setRandomColor();
				startInterval();
			}
		}, 1000);
	}
	function triggerGameOver() {
		clearInterval(intervalId);
		clearInterval(countdownInterval); // Pysäytä laskuri
		gameOver = true; // Aseta peli päättymään
		showModal = true; // Näytä pelin päättymisen modal
		showModal1.set(true);
		console.log('Game Over!'); // debuggaus
		// tallenna score taulukkoon
		highscoreList.push(score);
		console.log(highscoreList);
		lista.set(highscoreList);
	}
	function restartGame() {
		score = 0;
		gameOver = false; // Nollaa peli
		showModal = false; // Sulje modal
		showModal1.set(false);
		lastClicked = '';
		gameSpeed = initialGameSpeed; // Nollaa pelin nopeus
		startCountdown(); // Aloita laskuri
	}
	// Aloittaa pelin, kun komponentti on ladattu
	// ja asettaa värit satunnaisesti
	onMount(() => {
		startCountdown(); // Aloita laskuri

		window.addEventListener('keydown', handleKeyPress); // Lisää kuuntelija näppäimille joka rekisteröi painallukset

		return () => {
			clearInterval(intervalId);
			clearInterval(countdownInterval); // Pysäytä laskuri

			window.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

<div class="game-container">
	{#if isCountingDown}
		<div class="countdown-display">
			<h1>{countdownValue}</h1>
			<p>Gentlemen, start yourrrrrrr engineeeessssssss!!!!</p>
		</div>
	{:else}
		<div class="score-display">
			<h2>Score: {score}</h2>
			<!-- <p>Active color: {activeColor}</p> -->
			<p>Nopeus: {gameSpeed}ms</p>
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
				color="#0011FF"
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
		{clickedThisRound}
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
		font-size: 20px;
	}

	.button-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	@media (max-width: 600px) {
		.button-container {
			width: 96%;
			margin: 2%;
		}
		h2,
		p {
			font-size: 20px;
		}
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
