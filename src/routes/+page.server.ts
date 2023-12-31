//export const csr: boolean = false;
//export const ssr = true;
//export const prerender = true;


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    console.log(2);

    return {
        post: {name: 'koke', age: 23}
    }
}




