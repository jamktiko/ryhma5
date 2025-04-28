<script lang="ts">
let { company, year }: { company: string; year?: number } = $props();
</script>
<footer>
	Copyright by {company}, {year}
</footer>