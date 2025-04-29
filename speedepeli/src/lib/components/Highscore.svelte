<script lang="ts">
  let {highscores}:{highscores:number[]} = $props();
</script>

<h1>Highscore</h1>
{#each highscores as score}
  <div class="highscore">
    <p>{score}</p>
  </div>
{/each}