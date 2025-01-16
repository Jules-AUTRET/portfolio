<script lang="ts">
    export let name
    export let url
    export let image
</script>

<a class="app" href="{url}">
    <p>{name}</p>
    <img src="{image}" alt="{name} image" loading="lazy">
</a>

<style>
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: content-box;
        width: 64px;
        transition: all 0.15s ease-in-out;
    }

    :global(.app:not(.app:last-child)) {
        padding-right: var(--small-spacing);
    }

    .app:hover {
        width: 84px;
    }

    .app:hover p {
        animation: appear 0.15s ease-in-out forwards;
        animation-delay: 0.15s;
    }

    .app:hover :global(+ *) {
        transform: perspective(400px) rotateY(40deg);
        width: 76px;
    }

    :global(.app:has(+ *:hover)) {
        transform: perspective(400px) rotateY(-40deg);
        width: 76px;
    }

    img {
        border-radius: calc(var(--border-radius) - var(--small-spacing));
    }

    p {
        position: fixed;

        border-radius: calc(var(--border-radius) - var(--small-spacing));
        padding: 0.7rem 1rem;

        color: rgb(var(--white-color));
        background-color: rgba(var(--darker-primary-color), 0.7);

        backdrop-filter: blur(5px);

        font-family: var(--paragraph-font);
        font-weight: bold;
        letter-spacing: 1px;

        filter: var(--shadow-title);

        opacity: 0;
        pointer-events: none;
    }

    @keyframes appear {
        0% {
            bottom: 6.5rem;
            opacity: 0;
        }
        100% {
            bottom: 7.7rem;
            opacity: 1;
        }
    }
</style>