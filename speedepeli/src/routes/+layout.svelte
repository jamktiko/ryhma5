<script lang="ts">
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
let year = new Date().getFullYear();
</script>
<Header text="SpeedepeliPRo"/>
<main></main>
<Footer company="AOTT Oy" year={year}/>