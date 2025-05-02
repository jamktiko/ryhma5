import { writable } from 'svelte/store';
const listaClassic = writable<number[]>([]);
const listaAjoitettu = writable<number[]>([]);

export const lista = listaClassic;
export const lista2 = listaAjoitettu;
