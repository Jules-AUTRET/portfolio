<script lang="ts">
    import Application from "./application.svelte";

    let pages = [
        {name: "Test", url: "/", image: "/images/prototype-app.png"},
        {name: "Test2", url: "/", image: "/images/prototype-app.png"},
        {name: "Test3", url: "/", image: "/images/prototype-app.png"},
        {name: "Test4", url: "/", image: "/images/prototype-app.png"},
        {name: "Testaaaaaaaaaaaaaaaaaaa5", url: "/", image: "/images/prototype-app.png"},
    ]
</script>

<nav>
    <div class="container">
        <a id="logo" href="/">
            <span>J</span>
            <span>A</span>
        </a>
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
        bottom: 4.5vh;

        width: var(--100-width-without-border);

        display: flex;
        justify-content: center;
    }

    .container {
        padding: var(--small-spacing);

        display: inline-flex;
        gap: var(--small-spacing);

        background-color: rgba(var(--darker-primary-color), 0.4);
        backdrop-filter: blur(10px);
        border-radius: var(--border-radius);
        user-select: none;
    }

    #logo {
        position: relative;
        bottom: 3px;
        font-family: var(--title-font);
        align-self: center;

        cursor: pointer;
    }

    #logo span:nth-child(1) {
        position: relative;
        display: inline-block;
        left: 10px;
        transform: rotate(28deg);
        color: rgb(var(--white-color));
        font-size: 3.1rem;
    }

    #logo span:nth-child(2) {
        color: #FFD700;
        font-size: 2.1rem;
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
        align-items: center;
    }
</style>