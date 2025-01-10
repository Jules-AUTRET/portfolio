import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const validParams = ['foo', 'bar'];
    const { project } = params;

    if (!validParams.includes(project)) {
        throw error(404, 'Page not found');
    }

    return { project };
}