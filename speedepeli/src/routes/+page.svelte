<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { onMount, onDestroy } from 'svelte';
	const colors = ['red', 'blue', 'green', 'yellow'];
	let activeColor = 'red'; // aloitusväri
	let score = 0;
	let lastClicked = ''; // viimeksi klikattu väri
	let intervalId: ReturnType<typeof setInterval>; // tallentaa setIntervalin ID:n, jotta voimme puhdistaa sen myöhemmin
	let gameSpeed = 2000; // kertoo pelin nopeuden, kuinka usein väri vaihtuu (2 sekuntia)

	function setRandomColor() {
		const randomIndex = Math.floor(Math.random() * colors.length);
		activeColor = colors[randomIndex];
		console.log('Active color:', activeColor);
	}

	function handleClick(color: string) {
		console.log('klikattu', color);
		lastClicked = color;
		if (color === activeColor) {
			score += 1;
			console.log('Oikein!' + score);
		} else {
			score = Math.max(0, score - 1);
			console.log('Väärin!' + score);
		}
		clearInterval(intervalId); // Pysäytä väri vaihtumasta
		setRandomColor(); // Aseta uusi väri heti
		intervalId = setInterval(() => {
			setRandomColor(); // Vaihda väri uudelleen
		}, gameSpeed); // Käynnistä väri vaihtuminen uudelleen
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