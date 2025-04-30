<script lang="ts">
 import {lista} from '$lib/components/highscore.svelte.js';
 let highscores = $derived($lista);
 function orderList(a: number, b: number) {
   return b - a 
 }
 function sorted(){
  highscores.sort()
  highscores.sort(orderList)
  return highscores
 }
 sorted()
</script>

<h1>Highscore</h1>
{#each highscores as score}
  <div class="highscore">
    <p>{score}</p>
  </div>
{/each}