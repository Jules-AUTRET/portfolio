<script lang="ts">
    import Application from "./application.svelte";

    let pages = [
        {name: "Test", url: "/", image: "/images/prototype-app.png"},
        {name: "Test2", url: "/", image: "/images/prototype-app.png"},
        {name: "Test3", url: "/", image: "/images/prototype-app.png"}
    ]
</script>

<nav>
    <div class="container">
        <div class="separator"></div>
        <div class="applications">
            {#each pages as page}
                <Application
                  name={page.name}
                  url="{page.url}"
                  image="{page.image}"
                />
            {/each}
        </div>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        bottom: 4vh;

        width: 100%;

        display: flex;
        justify-content: center;
    }

    .container {
        padding: var(--small-spacing);

        display: inline-flex;
        gap: var(--small-spacing);

        background-color: rgba(var(--black-color), 0.4);
        backdrop-filter: blur(10px);
        border-radius: var(--border-radius);
    }

    .separator {
        align-self: center;

        width: 3px;
        height: 3rem;

        border-radius: var(--border-radius);

        background-color: rgb(var(--white-color));
    }

    .applications {
        display: inline-flex;
        gap: var(--small-spacing);
    }
</style>