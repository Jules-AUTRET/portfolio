<script lang="ts">
    import Application from "./application.svelte";
    import { onMount } from 'svelte';

    let pages = [
        {name: "Mon univers", url: "/#my-univers", image: "/images/navbar/icon-my-univers.png"},
        {name: "Mes outils", url: "/#my-tools", image: "/images/navbar/icon-my-tools.png"},
        {name: "Mes projets", url: "/#my-projects", image: "/images/navbar/icon-my-projects.png"},
        {name: "Contact", url: "/#contact", image: "/images/navbar/icon-contact.png"},
        {name: "Mon CV", url: "/cv/Jules-AUTRET-cv.pdf", image: "/images/navbar/icon-cv.png"},
    ]

    let moreAppButton: SVGSVGElement = $state();

    onMount(() => {
        moreAppButton.addEventListener("click", () => {
            
        });
    });
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
        <svg bind:this={moreAppButton} id='more-apps' width='64' height='64' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(0.91 0 0 0.91 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(var(--white-color)); fill-rule: nonzero; opacity: 1;" transform=" translate(-15, -15)" d="M 6 4 C 4.897 4 4 4.897 4 6 L 4 12 C 4 13.103 4.897 14 6 14 L 12 14 C 13.103 14 14 13.103 14 12 L 14 6 C 14 4.897 13.103 4 12 4 L 6 4 z M 18 4 C 16.897 4 16 4.897 16 6 L 16 12 C 16 13.103 16.897 14 18 14 L 24 14 C 25.103 14 26 13.103 26 12 L 26 6 C 26 4.897 25.103 4 24 4 L 18 4 z M 6 16 C 4.897 16 4 16.897 4 18 L 4 24 C 4 25.103 4.897 26 6 26 L 12 26 C 13.103 26 14 25.103 14 24 L 14 18 C 14 16.897 13.103 16 12 16 L 6 16 z M 18 16 C 16.897 16 16 16.897 16 18 L 16 24 C 16 25.103 16.897 26 18 26 L 24 26 C 25.103 26 26 25.103 26 24 L 26 18 C 26 16.897 25.103 16 24 16 L 18 16 z" stroke-linecap="round" /></g></svg>
    </div>
</nav>

<style lang="postcss">
    nav {
        position: fixed;
        bottom: 4.5vh;

        left: 50%;
        transform: translateX(-50%);

        display: flex;
        justify-content: center;
    }

    nav::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;

        border-radius: var(--border-radius);

        backdrop-filter: blur(10px);
    }

    .container {
        padding: var(--small-spacing);

        display: inline-flex;
        gap: var(--small-spacing);

        background-color: rgba(var(--darker-primary-color), 0.4);
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
        position: relative;
        align-self: center;

        width: 3px;
        height: 3rem;

        border-radius: var(--border-radius);

        background-color: rgb(var(--white-color));
    }

    .applications {
        position: relative;
        display: inline-flex;
        align-items: center;
    }

    #more-apps {
        display: none;
        position: relative;
        cursor: pointer;
    }

    @media (max-width: 1010px) {
        .applications {
            display: none;
        }

        #more-apps {
            display: block;
        }
    }
</style>