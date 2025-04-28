<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		header?: Snippet;
		children: Snippet;
		footer?: Snippet;
	}

	let { header, children, footer }: Props = $props();

	import { fly } from 'svelte/transition';
</script>

<div class="modal" transition:fly={{ y: -300, delay: 50, duration: 500 }}>
	<header>
		{@render header?.()}
	</header>

	{@render children()}

	<footer>
		{@render footer?.()}
	</footer>
</div>

<style>
.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	padding: 20px;
	width: 300px;
	z-index: 1000;
}
</style>
