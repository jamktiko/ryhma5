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
	</div>

	<button class="sulje-nappi" onclick={hideModal}>X</button>
</ModalAbout>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

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
	@media (max-width: 700px) {
		.rectangle-1 {
			left: -20px;
			width: 400px;
		}
	}
	@media (max-width: 445px) {
		.rectangle-1 {
			width: 350px;
			left: 20px;
		}
	}
	@media (max-width: 370px) {
		.rectangle-1 {
			width: 250px;
			left: 50px;
		}
	}

	.speedeonreaktiopelijokatestaareaktiokykyjsijatarkkuuttasi_span {
		color: black;
		font-size: 32px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}
	@media (max-width: 700px) {
		.speedeonreaktiopelijokatestaareaktiokykyjsijatarkkuuttasi_span {
			font-size: 25px;
		}
	}
	@media (max-width: 445px) {
		.speedeonreaktiopelijokatestaareaktiokykyjsijatarkkuuttasi_span {
			font-size: 18px;
		}
	}
	@media (max-width: 370px) {
		.speedeonreaktiopelijokatestaareaktiokykyjsijatarkkuuttasi_span {
			font-size: 15px;
		}
	}

	.speede-on-reaktiopeli-joka-testaa-reaktiokykyjsi-ja-tarkkuuttasi {
		width: 600px;
		height: 65px;
		left: 0px;
		top: 96px;
		position: absolute;
		text-align: center;
	}
	@media (max-width: 700px) {
		.speede-on-reaktiopeli-joka-testaa-reaktiokykyjsi-ja-tarkkuuttasi {
			width: 400px;
			left: -10px;
			top: 100px;
		}
	}
	@media (max-width: 445px) {
		.speede-on-reaktiopeli-joka-testaa-reaktiokykyjsi-ja-tarkkuuttasi {
			width: 350px;
			left: 20px;
		}
	}
	@media (max-width: 370px) {
		.speede-on-reaktiopeli-joka-testaa-reaktiokykyjsi-ja-tarkkuuttasi {
			width: 250px;
			left: 60px;
		}
	}

	.pelissonkolmeerimodeajotkatarjoavateripelitapoja_span {
		color: black;
		font-size: 32px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}
	@media (max-width: 700px) {
		.pelissonkolmeerimodeajotkatarjoavateripelitapoja_span {
			font-size: 24px;
		}
	}
	@media (max-width: 445px) {
		.pelissonkolmeerimodeajotkatarjoavateripelitapoja_span {
			font-size: 20px;
		}
	}
	@media (max-width: 370px) {
		.pelissonkolmeerimodeajotkatarjoavateripelitapoja_span {
			font-size: 15px;
		}
	}

	.peliss-on-kolme-eri-modea-jotka-tarjoavat-eri-pelitapoja {
		width: 600px;
		height: 65px;
		left: 0px;
		top: 161px;
		position: absolute;
		text-align: center;
	}
	@media (max-width: 700px) {
		.peliss-on-kolme-eri-modea-jotka-tarjoavat-eri-pelitapoja {
			width: 400px;
			left: -10px;
		}
	}
	@media (max-width: 445px) {
		.peliss-on-kolme-eri-modea-jotka-tarjoavat-eri-pelitapoja {
			width: 350px;
			left: 20px;
		}
	}
	@media (max-width: 370px) {
		.peliss-on-kolme-eri-modea-jotka-tarjoavat-eri-pelitapoja {
			width: 250px;
			left: 55px;
		}
	}
	.classicajoitettu_span {
		color: black;
		font-size: 32px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}
	@media (max-width: 700px) {
		.classicajoitettu_span {
			font-size: 25px;
		}
	}

	.classic-ajoitettu {
		width: 600px;
		height: 102px;
		left: 0px;
		top: 231px;
		position: absolute;
		text-align: center;
	}
	@media (max-width: 700px) {
		.classic-ajoitettu {
			width: 400px;
			left: -10px;
		}
	}
	@media (max-width: 445px) {
		.classic-ajoitettu {
			width: 350px;
			left: 20px;
		}
	}
	@media (max-width: 370px) {
		.classic-ajoitettu {
			width: 250px;
			left: 60px;
		}
	}

	.kehittjttatuolkinuoraaapohampaalateemujalavaoskaripuranen_span {
		color: black;
		font-size: 32px;
		font-family: 'Jersey 10';
		font-weight: 400;
		word-wrap: break-word;
	}
	@media (max-width: 700px) {
		.kehittjttatuolkinuoraaapohampaalateemujalavaoskaripuranen_span {
			font-size: 30px;
		}
	}

	.kehittjt-tatu-olkinuora-aapo-hampaala-teemu-jalava-oskari-puranen {
		width: 600px;
		height: 165px;
		left: 0px;
		top: 430px;
		position: absolute;
		text-align: center;
	}
	@media (max-width: 700px) {
		.kehittjt-tatu-olkinuora-aapo-hampaala-teemu-jalava-oskari-puranen {
			left: -10px;
			width: 400px;
		}
	}
	@media (max-width: 445px) {
		.kehittjt-tatu-olkinuora-aapo-hampaala-teemu-jalava-oskari-puranen {
			left: 20px;
			width: 350px;
		}
	}
	@media (max-width: 370px) {
		.kehittjt-tatu-olkinuora-aapo-hampaala-teemu-jalava-oskari-puranen {
			left: 60px;
			width: 250px;
		}
	}

	.line-1 {
		width: 600px;
		height: 0px;
		left: 5px;
		top: 97px;
		position: absolute;
		outline: 1px black solid;
		outline-offset: -0.5px;
	}
	@media (max-width: 700px) {
		.line-1 {
			width: 398px;
			left: -15px;
		}
	}
	@media (max-width: 445px) {
		.line-1 {
			width: 349px;
			left: 25px;
		}
	}
	@media (max-width: 370px) {
		.line-1 {
			width: 249px;
			left: 55px;
		}
	}

	/* .icon {
		left: 22.75px;
		top: 22.75px;
		position: absolute;
	} */

	.sulje-nappi {
		background: linear-gradient(180deg, #ff6161 0%, #d55151 50%, #993a3a 100%);
		border: 3px solid #000000;
		border-radius: 14px;
		color: black;
		font-family: 'Jersey 10';
		font-size: 45px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: all 0.2s ease;
		position: flex;
		text-decoration: none;
		width: 80px;
		height: 80px;
		left: 520px;
		top: 15px;
		border-radius: 50px;
		position: absolute;
		overflow: hidden;
	}
	@media (max-width: 700px) {
		.sulje-nappi {
			left: 300px;
		}
	}
	@media (max-width: 445px) {
		.sulje-nappi {
			left: 270px;
		}
	}
	@media (max-width: 370px) {
		.sulje-nappi {
			left: 160px;
		}
	}

	.sulje-nappi:hover {
		background: linear-gradient(180deg, #ff7777 0%, #e66666 50%, #aa4444 100%);
		transform: translateY(-2px);
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
	}

	.sulje-nappi:active {
		background: linear-gradient(180deg, #d55151 0%, #993a3a 50%, #772222 100%);
		transform: translateY(1px);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	}
	.info {
		width: 600px;
		height: 600px;
		position: relative;
	}
	@media (max-width: 700px) {
		.info {
			width: 390px;
		}
	}
	@media (max-width: 445px) {
		.info {
			width: 340px;
			left: -20px;
		}
	}
	@media (max-width: 370px) {
		.info {
			width: 240px;
			left: -60px;
		}
	}
</style>
