<script lang="ts">
  let { highscoreList }: { highscoreList: number[] } = $props();
  let highscores = highscoreList.sort((a, b) => b - a).slice(0, 10); // Järjestetään korkeimmat kymmenen pistettä
</script>

<h1>Highscore</h1>
{#each highscores as score}
  <div class="highscore">
    <p>{score}</p>
  </div>
{/each}