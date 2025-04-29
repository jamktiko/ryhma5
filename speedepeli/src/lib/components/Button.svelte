<script lang="ts">
  let { color, active = false, onClick, keyLabel } = $props();
</script>

<button
  style="
    background: {color};
    opacity: {active ? 1 : 0.5};
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: none;
    margin: 8px;
    cursor: pointer;
  "
  onclick={onClick}
  aria-label="Interactive button"
>
{#if keyLabel}
  <span class="key-label">{keyLabel}</span>
{/if}
</button>