<script lang="ts">
    import type { Project } from "../../../data/projects/projects";

    export let project: Project;
</script>

<div class="project">
    <a href="{project.link}"><img class="project-image" src="{project.image}" alt="{project.alt}"></a>
    <div class="project-info">
        <h4 class="project-title">{project.title}</h4>
        <p class="project-description">{project.description} <br> <a href="{project.link}">Voir plus</a></p>
        <div class="tags">
            {#each project.tags as tag}
                <p class="project-tag {tag.type}"><span>{tag.name}</span></p>
            {/each}
        </div>
    </div>
</div>

<style>
    .project {
        display: flex;
    }

    .project-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--small-spacing);

        width: 75%;

        padding-inline: var(--large-spacing);
    }

    .project a {
        width: 25%;
        height: 15rem;
    }

    .project-image {
        display: inline-block;
        object-fit: cover;

        width: 100%;
        height: 100%;

        border-radius: var(--border-radius);
        transition: all 0.2s ease-in-out;
    }

    .project-image:hover {
        transform: scale(1.05);
    }

    .project-title {
        font-family: var(--title-font);
        font-size: 1.8rem;
        color: rgb(var(--darker-primary-color));
    }

    .project-description {
        font-family: var(--paragraph-font);
        font-size: var(--paragraph-font-size);
        color: rgb(var(--darker-primary-color));
    }

    .project-description a {
        color: rgba(var(--darker-primary-color), 0.6);
        text-decoration: underline;
    }

    .tags {
        display: flex;
        gap: var(--small-spacing);
    }

    .project-tag {
        font-family: var(--paragraph-font);
        font-size: calc(var(--paragraph-font-size) * 0.7);

        padding: var(--very-small-spacing) var(--small-spacing);
        border-radius: var(--border-radius);
    }

    .project-tag span {
        position: relative;
        top: -1px;
    }

    .realiser {
        background-color: red;
    }

    .optimiser {
        background-color: red;
    }

    .administrer {
        background-color: red;
    }

    .gerer {
        background-color: red;
    }

    .conduire {
        background-color: red;
    }

    .collaborer {
        background-color: red;
    }
</style>