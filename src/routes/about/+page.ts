/** @type {import('./$types').PageLoad} */
export async function load() {
	console.log('LOOOOAD');

	const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
	const json = await data.json();

	return {
		title: 'Hello world!',
		content: '<b>Welcome to our blog</b>. Lorem ipsum dolor sit amet...',
		pokemon: json.results
	};
}
