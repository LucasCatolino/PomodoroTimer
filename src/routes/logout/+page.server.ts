import { fail, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {

    cookies.delete('user', { path: '/' });

    throw redirect(302, '/')
}) satisfies PageServerLoad;