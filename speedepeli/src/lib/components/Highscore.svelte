<script lang="ts">
  interface Props {
    highscores: { name: string; value: number }[];
    score: number; // Lisää score-propsi
  }

  export let highscores: Props['highscores'];
  export let score: Props['score']; // Vie score-propsi ulos
</script>

{#if highscores.length > 0}
  <h2>Highscores</h2>
  <ol>
    {#each highscores as scoreitem}
      <li>{scoreitem.name}: {scoreitem.value}</li>
    {/each}
  </ol>
{:else}
  <p>No highscores yet.</p>
{/if}

<p>Current Score: {score}</p>