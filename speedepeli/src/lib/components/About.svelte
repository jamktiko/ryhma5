<script lang="ts">
  import ModalAbout from '$lib/components/Modal.svelte';
  interface Props {
  hideModal: () => void;
}

let {hideModal }: Props = $props();
</script>
<ModalAbout>
  {#snippet header()}
  <h1>Tietoja pelistä</h1>
{/snippet}
<div>
  <h2>Kuvaus pelistä</h2>
  <p>diipaduupadaa</p>
  <h3>Pelin tekijät</h3>
  <ul>
    <li>Aapo</li>
    <li>Tatu</li>
    <li>Oskari</li>
    <li>Teemu</li>
  </ul>
</div>
{#snippet footer()}
  <button onclick={hideModal}>Sulje</button>
{/snippet}
</ModalAbout>