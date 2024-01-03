import { writable } from "svelte/store";

const nickname = writable('');

export { nickname };