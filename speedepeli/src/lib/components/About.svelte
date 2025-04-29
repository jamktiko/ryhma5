<script lang="ts">
	import ModalAbout from '$lib/components/Modal.svelte';
	interface Props {
		hideModal: () => void;
	}

	let { hideModal }: Props = $props();
</script>

<ModalAbout>
	<div data-layer="Info" class="info">
		<div data-layer="Rectangle 1" class="rectangle-1"></div>
		<div
			data-layer="Speede on reaktiopeli, joka testaa reaktiokykyjäsi ja tarkkuuttasi."
			class="speede-on-reaktiopeli-joka-testaa-reaktiokykyjsi-ja-tarkkuuttasi"
		>
			<span class="speedeonreaktiopelijokatestaareaktiokykyjsijatarkkuuttasi_span"
				>Speede on reaktiopeli, joka testaa reaktiokykyjäsi ja tarkkuuttasi.</span
			>
		</div>
		<div
			data-layer="Pelissä on kolme eri modea, jotka tarjoavat eri pelitapoja:"
			class="peliss-on-kolme-eri-modea-jotka-tarjoavat-eri-pelitapoja"
		>
			<span class="pelissonkolmeerimodeajotkatarjoavateripelitapoja_span"
				>Pelissä on kaksi eri modea, jotka tarjoavat eri pelitapoja:</span
			>
		</div>
		<div data-layer="Classic Ajoitettu" class="classic-ajoitettu">
			<span class="classicajoitettu_span">Classic<br />Ajoitettu<br /></span>
		</div>
		<div
			data-layer="Kehittäjät: Tatu Olkinuora Aapo Hampaala Teemu Jalava Oskari Puranen"
			class="kehittjt-tatu-olkinuora-aapo-hampaala-teemu-jalava-oskari-puranen"
		>
			<span class="kehittjttatuolkinuoraaapohampaalateemujalavaoskaripuranen_span"
				>Kehittäjät:<br />Tatu Olkinuora<br />Aapo Hampaala<br />Teemu Jalava<br />Oskari Puranen</span
			>
		</div>
		<div data-layer="Line 1" class="line-1"></div>
		<div data-layer="X" data-size="48" class="x">
			<div data-svg-wrapper data-layer="Icon" class="icon">
				<svg
					width="51"
					height="51"
					viewBox="0 0 51 51"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M48.25 2.75L2.75 48.25M2.75 2.75L48.25 48.25"
						stroke="var(--Icon-Default-Default, #1E1E1E)"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
	</div>

	{#snippet footer()}
		<button class="sulje-nappi" onclick={hideModal}>X</button>
	{/snippet}
</ModalAbout>

<style>
	.rectangle-1 {
		width: 600px;
		height: 600px;
		left: 0px;
		top: 0px;
		position: absolute;
		background: #00d4ff;
		border-radius: 5px;
		border: 5px white solid;
	}

	.speedeonreaktiopelijokatestaareaktiokykyjsijatarkkuuttasi_span {
		color: black;
		font-size: 32px;
		font-family: Jersey 10;
		font-weight: 400;
		word-wrap: break-word;
	}

	.speede-on-reaktiopeli-joka-testaa-reaktiokykyjsi-ja-tarkkuuttasi {
		width: 600px;
		height: 65px;
		left: 0px;
		top: 96px;
		position: absolute;
		text-align: center;
	}

	.pelissonkolmeerimodeajotkatarjoavateripelitapoja_span {
		color: black;
		font-size: 32px;
		font-family: Jersey 10;
		font-weight: 400;
		word-wrap: break-word;
	}

	.peliss-on-kolme-eri-modea-jotka-tarjoavat-eri-pelitapoja {
		width: 600px;
		height: 65px;
		left: 0px;
		top: 161px;
		position: absolute;
		text-align: center;
	}

	.classicajoitettu_span {
		color: black;
		font-size: 32px;
		font-family: Jersey 10;
		font-weight: 400;
		word-wrap: break-word;
	}

	.classic-ajoitettu {
		width: 600px;
		height: 102px;
		left: 0px;
		top: 231px;
		position: absolute;
		text-align: center;
	}

	.kehittjttatuolkinuoraaapohampaalateemujalavaoskaripuranen_span {
		color: black;
		font-size: 32px;
		font-family: Jersey 10;
		font-weight: 400;
		word-wrap: break-word;
	}

	.kehittjt-tatu-olkinuora-aapo-hampaala-teemu-jalava-oskari-puranen {
		width: 600px;
		height: 165px;
		left: 0px;
		top: 430px;
		position: absolute;
		text-align: center;
	}

	.line-1 {
		width: 590px;
		height: 0px;
		left: 5px;
		top: 97px;
		position: absolute;
		outline: 1px black solid;
		outline-offset: -0.5px;
	}

	/* .icon {
		left: 22.75px;
		top: 22.75px;
		position: absolute;
	} */

	.sulje-nappi {
		width: 80px;
		height: 80px;
		left: 504px;
		top: 30px;
		position: absolute;
		overflow: hidden;
		font-size: 50px
	}

	.info {
		width: 600px;
		height: 600px;
		position: relative;
	}
</style>
