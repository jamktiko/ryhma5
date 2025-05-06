import { writable } from 'svelte/store';
const listaClassic = writable<number[]>([]);
const listaAjoitettu = writable<number[]>([]);

export const lista = listaClassic;
export const lista2 = listaAjoitettu;
export const showModal1 = writable<boolean>(false); // tilanhallinta, kun gameover ikkuna aukeaa, aloitus sivun linkki katoaa
