import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }: any) {
	const simon = {
		age: 32,
		skills: ['Ionic', 'Sveltekit', 'Flutter'],
		url
	};

	return new Response(JSON.stringify(simon));
}
