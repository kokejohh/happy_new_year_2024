import { redirect } from '@sveltejs/kit';

import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { db } from '$lib/server/connectFirebase.server';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

interface User {
    username: string;
    nickname: string;
    displayname_th: string;
    displayname_en: string;
    email: string;
    department: string;
    faculty: string;
    status?: boolean;
    isNewUser?: boolean;
    location?: string;
}

/** @type {import('./$types').PageServerLoad} */
export const load: import('./$types').PageServerLoad = function ({ cookies }) {
    const cookieValue: string = cookies.get('happy_new_year_2024') || '';
    const decodeCookie: string = decodeURIComponent(atob(cookieValue)) || '{}';

    const user: User = JSON.parse(decodeCookie);
    if (user.status === true && user.isNewUser === false) {
        throw redirect(302, '/');
    }
};

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
    auth: async ({ cookies, request }) => {
        const data: FormData = await request.formData();
        const username: FormDataEntryValue | null = data.get('username');
        const password: FormDataEntryValue | null = data.get('password');
        const options: AxiosRequestConfig = {
            method: "POST",
            url: import.meta.env.VITE_API_URL_TU,
            headers: {
                "Content-Type": "application/json",
                "Application-Key": import.meta.env.VITE_API_KEY_TU,
            },
            data: {
                UserName: username,
                PassWord: password,
            },
        };

        let cookieToken;
        const responseData = { status: 200, data: { username: username?.toString() ?? '' } };
        try {
            // tu api
            const response: AxiosResponse<any, any> = await axios.request(options);
            const { data } = response;

            const user: User = {
                status: data.status,
                username: username?.toString() || '',
                nickname: data.displayname_th,
                displayname_th: data.displayname_th,
                displayname_en: data.displayname_en,
                email: data.email,
                department: data.department,
                faculty: data.faculty,
            }

            // firestore
            const userRef = doc(db, 'user', user.username);
            const userSnap = await getDoc(userRef);
            const isNewUser: boolean = !userSnap.exists();
            if (!userSnap.exists()) {
                console.log('new user login.');
                await setDoc(userRef, user);
                console.log('insert new user successfully.');
            } else {
                user.nickname = userSnap.data().nickname;
                console.log('existing user.');
            }
            user.isNewUser = isNewUser;
            user.location = import.meta.env.VITE_LOCATION;

            cookieToken = btoa(encodeURIComponent(JSON.stringify(user)));
            cookies.set('happy_new_year_2024', cookieToken, { path: '/' });
            console.log('login successfully.');
        } catch (error: unknown) {
            responseData.status = 401;
            console.log('login error');
            if (axios.isAxiosError(error)) {
                console.log("error message: ", error.response?.data);
            } else {
                console.log("unexpected error: ", error);
            }
        }
        return responseData;
    },

    nickname: async ({ cookies, request }) => {
        const data: FormData = await request.formData();
        const nickname: FormDataEntryValue | null = data.get('nickname');

        const cookieValue: string = cookies.get('happy_new_year_2024') || '';
        const decodeCookie: string = decodeURIComponent(atob(cookieValue)) || '{}';

        try {
            const user: User = JSON.parse(decodeCookie);
            const userRef = doc(db, 'user', user.username);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                await updateDoc(userRef, {
                    nickname: nickname,
                });
                user.nickname = nickname?.toString() || '';
                user.isNewUser = false;
                console.log('update nickname successfully.');
            } else {
                console.log('not founed user.');
            }

            const cookieToken = btoa(encodeURIComponent(JSON.stringify(user)));
            cookies.set('happy_new_year_2024', cookieToken, { path: '/' });

            console.log('change name successfully.');
        } catch (error: unknown) {
            console.log('change name error:', error);
        }
        throw redirect(302, '/');
    },
}
