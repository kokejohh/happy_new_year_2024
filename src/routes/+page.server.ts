//export const csr: boolean = false;
//export const ssr = true;
//export const prerender = true;

import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
    logout: async ({ cookies, request }) => {
        console.log('logout...');
        cookies.delete('happy_new_year_2024', { path: '/' });
        throw redirect(302, '/login');
    }
}