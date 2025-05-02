<script lang="ts">
	import type { Snippet } from 'svelte';
  import { scale } from 'svelte/transition';
	interface Props {
		header?: Snippet;
		children: Snippet;
		footer?: Snippet;
	}

	let { header, children, footer }: Props = $props();

	
</script>

<div class="modal" transition:scale={{ delay:200, duration: 200 }}>
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
