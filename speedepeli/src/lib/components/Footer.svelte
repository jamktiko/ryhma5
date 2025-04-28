<script lang="ts">
let { company, year }: { company: string; year?: number } = $props();
</script>
<footer>
	Copyright by {company}, {year}
</footer>
<style>
  footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 2.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		text-shadow: 2px 2px 1px rgba(200, 200, 200, 0.38);
	}
</style>