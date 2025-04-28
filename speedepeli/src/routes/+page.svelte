<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	let activeColor = 'red';
	let score = 0;
	let lastClicked = '';

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
	}
</script>

<div class="game-container">
	<div class="score-display">
		<h2>Score: {score}</h2>
		<p>Active color: {activeColor}</p>
		<p>Last clicked: {lastClicked || 'None'}</p>
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
