import { error } from '@sveltejs/kit';
import { projects } from '../../../data/projects/projects';

export async function load({ params }) {
    const { project } = params; // Dynamic parameter

    const projectData = projects.find((p) => p.link === project);

    if (!projectData) {
        throw error(404, 'Project not found');
    }

    return { projectData };
}