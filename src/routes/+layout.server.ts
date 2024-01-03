/** @type {import('./$types').LayoutServerLoad} */
export const load: import('./$types').LayoutServerLoad = function({ cookies }) {
    const cookieValue: string = cookies.get('happy_new_year_2024') || '';
    const decodeCookie: string = decodeURIComponent(atob(cookieValue)) || '{}';

    try {
        const cookie = { cookieValue: JSON.parse(decodeCookie) };
        return cookie;
    } catch (error) {
        console.log(error);
        return { cookieValue: {} };
    }
};