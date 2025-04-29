<script lang="ts">
  import Modal from "./Modal.svelte";
	import { onMount } from "svelte";
  interface Props {
		hideModal: () => void;
		score: number;
	}

	let {hideModal, score }: Props = $props();
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
      const playerRank = ranks.find(r => 
        score >= r.min_points && score <= r.max_points
      );
      
      // Päätä pelaajan rankki ja aseta default-arvo
      rank = playerRank ? playerRank.name : score === 0 ? "Noviisi" : "Mestari";
    } catch (error) {
      console.error("Error loading rank:", error);
      rank = "Rank unavailable";
    }
  });
</script>
<Modal>
	{#snippet header()}
		<h1>Game Over</h1>
	{/snippet}
<div class="game-rank">
	<p>Score: {score}</p>
	<p>Rank: {rank}</p>
</div>
	{#snippet footer()}
		<button onclick={hideModal}>Sulje</button>
		<button onclick={() => { hideModal(); }}>Restart</button>
	{/snippet}
</Modal>