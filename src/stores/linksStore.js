import { persisted } from 'svelte-persisted-store';

export const links = persisted('links', [
	{
		id: 1,
		slug: 'test',
		title: 'Test'
	}
]);
