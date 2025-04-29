<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import GameOver from '$lib/components/GameOver.svelte';
	import { onMount, onDestroy } from 'svelte';
	const colors = ['red', 'blue', 'green', 'yellow'];
	const keyMappings = {
		'a': 'red',
		's': 'yellow',
		'd': 'green',
		'f': 'blue',
	}
	let activeColor = 'red'; // aloitusväri
	let score = 0;
	let lastClicked = ''; // viimeksi klikattu väri
	let intervalId: ReturnType<typeof setInterval>; // tallentaa setIntervalin ID:n, jotta voimme puhdistaa sen myöhemmin
	let gameSpeed = 2000; // kertoo pelin nopeuden, kuinka usein väri vaihtuu (2 sekuntia)
	let gameOver = false; // peli päättynyt -tilamuuttuja
	let clickedThisRound = false; // tarkistaa, onko pelaaja klikannut väriä tällä kierroksella
	let showModal = false; // näyttääkö pelin päättymisen jälkeen modalin
  let highscoreList:number[]=[]; // highscore lista

	function handleKeyPress(event: KeyboardEvent) {
		if (gameOver) return; // Jos peli on päättynyt, ei tehdä mitään
		const key = event.key.toLowerCase(); // Muuta näppäin pieniksi kirjaimiksi
    if (key in keyMappings) {
      const color = keyMappings[key as keyof typeof keyMappings];
      handleClick(color); // Klikkaa väriä, joka vastaa näppäintä
		}
	}

	function hideModal() {
		showModal = false; // sulje modal
	}

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
		gameOver = true; 	// Aseta peli päättymään
		showModal = true; // Näytä pelin päättymisen modal
		console.log('Game Over!'); 	// debuggaus
    // tallenna score taulukkoon
    highscoreList.push(score);
    console.log(highscoreList)
	}
	function restartGame() {
		score = 0;
		gameOver = false; // Nollaa peli
		showModal = false; // Sulje modal
		lastClicked = '';
		setRandomColor();
		startInterval();
	}
	// Aloittaa pelin, kun komponentti on ladattu
	// ja asettaa värit satunnaisesti
	onMount(() => {
    setRandomColor();
    startInterval();
    
    // Add keyboard event listener
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      clearInterval(intervalId);
      // Remove keyboard event listener on cleanup
      window.removeEventListener('keydown', handleKeyPress);
    };
  });
</script>

<div class="game-container">
  <div class="score-display">
    <h2>Score: {score}</h2>
    <p>Active color: {activeColor}</p>
  </div>
  <div class="button-container">
    <Button color="red" active={activeColor === 'red'} onClick={() => handleClick('red')} keyLabel='A' />
			<Button
				color="yellow"
				active={activeColor === 'yellow'}
				onClick={() => handleClick('yellow')}
				keyLabel='S'
			/>
			<Button color="green" active={activeColor === 'green'} onClick={() => handleClick('green')} keyLabel='D' />
    <Button color="blue" active={activeColor === 'blue'} onClick={() => handleClick('blue')} keyLabel='F' />
  </div>
</div>

{#if showModal}
  <GameOver score={score} hideModal={() => { hideModal(); restartGame(); }} />
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
	}

	.button-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		grid-template-columns: repeat(4, 1fr);
		gap: 5px;
	}



</style>
