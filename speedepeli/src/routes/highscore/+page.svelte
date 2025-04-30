<script lang="ts">
 import {lista} from '$lib/components/highscore.svelte.js';
 const highscores = $derived($lista);
</script>

<h1>Highscore</h1>
{#each highscores as score}
  <div class="highscore">
    <p>{score}</p>
  </div>
{/each}