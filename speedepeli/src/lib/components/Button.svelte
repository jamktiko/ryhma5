<script lang="ts">
  let { color, active = false, onClick } = $props();
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
</button>