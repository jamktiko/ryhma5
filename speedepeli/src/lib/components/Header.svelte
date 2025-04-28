<script lang="ts">
  let { text, logo }: { text: string; logo?: string } = $props();
</script>

<header>
<h1>{text}</h1>
</header>

<style>
h1{
  color: #ff3e00;
  font-size: 2em;
  text-align: center;
  margin: 0;
}
</style>