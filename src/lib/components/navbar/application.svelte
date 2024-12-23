<script lang="ts">
    export let name
    export let url
    export let image
</script>

<a href="{url}">
    <p>{name}</p>
    <img src="{image}" alt="{name} image">
</a>

<style>
    a {
        text-decoration: none;
    }

    img {
        width: 64px;
        height: 64px;

        border-radius: calc(var(--border-radius) - var(--small-spacing));
    }

    p {
        height: 0;
        opacity: 0;
    }
</style>