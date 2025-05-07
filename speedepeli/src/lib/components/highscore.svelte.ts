import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined'; // Tsekkaa onko window määritelyssä, eli onko selain käytössä.

function loadFromStorage(key: string) {
	// Lataa localStoragesta tieto koska se on vain selainympäristössä, jos ei ole selainympäristöä, niin palauttaa tyhjät taulukot.
	if (!isBrowser) return [];

	try {
		const saved = localStorage.getItem(key); // Yritetään ladata localStoragesta tieto.
		return saved ? JSON.parse(saved) : []; // Jos saadaan tieto, niin palautetaan se, muuten palautetaan tyhjät taulukot.
	} catch (error) {
		console.error(`Error loading ${key}:`, error);
		return [];
	}
}

const listaClassic = writable<number[]>(loadFromStorage('classicScores')); //
const listaAjoitettu = writable<number[]>(loadFromStorage('timeAttackScores'));

if (isBrowser) {
	// Jos ollaan selainympäristössä, niin ladataan localStoragesta tiedot ja tallennetaan ne storeihin.
	listaClassic.subscribe((scores) => {
		// Kun listaClassic muuttuu, niin tallennetaan se localStorageen.
		try {
			localStorage.setItem('classicScores', JSON.stringify(scores));
		} catch (error) {
			console.error('Error saving classic scores:', error);
		}
	});

	listaAjoitettu.subscribe((scores) => {
		// Kun listaAjoitettu muuttuu, niin tallennetaan se localStorageen.
		try {
			localStorage.setItem('timeAttackScores', JSON.stringify(scores));
		} catch (error) {
			console.error('Error saving time attack scores:', error);
		}
	});
}

export const lista = listaClassic;
export const lista2 = listaAjoitettu;
export const showModal1 = writable<boolean>(false);
