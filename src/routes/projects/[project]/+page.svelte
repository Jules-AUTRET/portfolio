<script lang="ts">
    import { onMount } from 'svelte';
    import Seo from "$components/seo/seo.svelte";

    let { data } = $props();
    const { projectData } = data;

    let imagesHolder: HTMLDivElement = $state();
    let popup: HTMLElement = $state();
    let popupImage: HTMLImageElement = $state();
    let closeButton: SVGSVGElement = $state();

    onMount(() => {
        Array.from(imagesHolder.children).forEach((image) => {
            image.addEventListener("click", () => {
                popupImage.src = (image as HTMLImageElement).src;
                popup.style.display = "flex";
                popup.classList.add("popup-animation");
            });
        })

        closeButton.addEventListener("click", () => {
            popup.style.display = "none";
            popup.classList.remove("popup-animation");
        })
    });
</script>

<Seo />

<section id="project-section">
    <h2 class="highlight">{projectData.data.shortTitle}</h2>
    <article class="contexte">
        <h3>Contexte</h3>
        <p>{@html projectData.data.detail.context}</p>
        <div class="contexte-tags">
            <p>Compétences liées: </p>
            <div class="tags">
                {#each projectData.data.tags as tag}
                    <p class="project-tag {tag.type}"><span>{tag.name}</span></p>
                {/each}
            </div>
        </div>
    </article>
    <div class="separator"></div>
    <article class="problematique">
        <h3>Problématique</h3>
        <p>{@html projectData.data.detail.problematic}</p>
    </article>
    <div class="separator"></div>
    <article class="realisation">
        <h3>Réalisation</h3>
        <p>{@html projectData.data.detail.realisation}</p>
        <div class="project-images" bind:this={imagesHolder}>
            <!-- TODO Make a real alt -->
            <img src={projectData.data.detail.image1} alt="test" style="grid-area: image1;" loading="lazy">
            <img src={projectData.data.detail.image2} alt="test" style="grid-area: image2;" loading="lazy">
            <img src={projectData.data.detail.image3} alt="test" style="grid-area: image3;" loading="lazy">
            <img src={projectData.data.detail.image4} alt="test" style="grid-area: image4;" loading="lazy">
        </div>
        {#if projectData.data.file !== ""}
            <a href={projectData.data.file} download="{projectData.link}.zip"><svg id='Downloads_Folder_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#fff' opacity='0'/><g transform="matrix(1 0 0 1 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(var(--white-color)); fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -15)" d="M 20 6 L 12 6 L 10 4 L 4 4 C 2.9 4 2 4.9 2 6 L 2 18 C 2 19.1 2.9 20 4 20 L 20 20 C 21.1 20 22 19.1 22 18 L 22 8 C 22 6.9 21.1 6 20 6 z M 12 17 L 8 13 L 11 13 L 11 10 L 13 10 L 13 13 L 16 13 L 12 17 z" stroke-linecap="round" /></g></svg> Télécharger</a>
        {/if}
    </article>
    <div class="separator"></div>
    <article class="conclusion">
        <h3>Conclusion</h3>
        <p>{@html projectData.data.detail.conclusion}</p>
    </article>
    {#if projectData.data.detail.collaborators.length > 0}
        <div class="separator"></div>
        <article class="collaboration">
            <h3>Collaboration</h3>
            <div class="collaborators">
                {#each projectData.data.detail.collaborators as collaborator}
                    <a href={collaborator.link}><img src={collaborator.image} alt={collaborator.name} title={collaborator.name}  loading="lazy"></a>
                {/each}
            </div>
        </article>
    {/if}
    <p style="color: rgba(var(--white-color), 0.8)">Réalisé le {projectData.data.detail.creationDate.toLocaleDateString("fr")}</p>
</section>

<aside class="popup-image" bind:this={popup}>
    <svg bind:this={closeButton} id="close-button-popup" width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#FFF' opacity='0'/><g transform="matrix(1.25 0 0 1.25 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(var(--white-color)); fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12)" d="M 4.9902344 3.9902344 C 4.583311313762054 3.99034126704891 4.2170253696916875 4.236989835007973 4.06390336887315 4.61400450633962 C 3.9107813680546117 4.991019177671266 4.00135746328929 5.423219223797841 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 C 4.031730979736982 18.54378627693672 3.9264984571322734 18.91623528883332 4.0178557241231125 19.26667551899203 C 4.109212991113951 19.617115749150738 4.382884502828869 19.89078718345139 4.733324758830068 19.98214435131215 C 5.0837650148312665 20.07350151917291 5.456213996960412 19.96826889121244 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 C 18.54378557313715 19.968271794792877 18.916235992218144 20.07350663500295 19.26667805152247 19.982149810984033 C 19.617120110826793 19.89079298696512 19.89079298696512 19.617120110826793 19.982149810984033 19.26667805152247 C 20.07350663500295 18.916235992218144 19.968271794792877 18.54378557313715 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 C 20.00279138203425 5.419539844341691 20.091719755203744 4.97996529943312 19.930965587636003 4.60011851351951 C 19.770211420068257 4.220271727605899 19.392752465942692 3.9780759926381157 18.980469 3.9902344 C 18.72067037618049 3.997975535874743 18.474090604386607 4.1065547057164276 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 C 5.518760128868619 4.0994360568055255 5.260236101227262 3.990250139131801 4.9902344 3.9902344 z" stroke-linecap="round" /></g></svg>
    <img src="" alt="Aggrandi" bind:this={popupImage} loading="lazy">
</aside>

<style lang="postcss">
    @import "/colors.css";
    @import "/fonts.css";
    @import "/spacing.css";
    @import "/animations.css";

    #project-section {
        display: flex;
        flex-direction: column;
        gap: var(--large-spacing);

        padding: 10rem 7vw;

        @mixin fabric-background;

        color: rgb(var(--white-color));
    }

    #project-section h2 {
        margin-inline: auto;
    }

    #project-section p {
        color: rgba(var(--white-color), 0.8);
    }

    #project-section article {
        display: flex;
        flex-direction: column;
        gap: var(--small-spacing);
    }

    .realisation a {
        padding: var(--small-spacing);

        text-align: center;

        color: rgb(var(--white-color));
        background-color: rgb(var(--darker-primary-color));

        border-radius: var(--border-radius);
    }

    .contexte-tags {
        display: flex;
        flex-direction: column;
        gap: var(--very-small-spacing);
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--small-spacing);
    }

    .project-tag {
        position: relative;
        top: 2px;

        font-family: var(--paragraph-font);
        font-size: calc(var(--paragraph-font-size) * 0.6);
        font-weight: bold;

        padding: 0.4rem var(--small-spacing);
        border-radius: var(--border-radius);

        background-color: rgb(var(--secondary-color));
    }

    .project-tag span {
        position: relative;
        color: rgb(var(--white-color));
    }

    .project-images {
        display: grid;
        grid-template:
            "image1 image2 image4"
            "image1 image3 image4";
        gap: var(--small-spacing);

        height: 35rem;
        min-height: 0;
        min-width: 0;
    }

    .project-images img {
        width: 100%;
        height: 100%;

        border-radius: var(--border-radius);

        object-fit: cover;

        cursor: pointer;
        transition: all 0.15s ease-in-out;

        overflow: hidden;
        min-width: 0;
    }

    .project-images img:hover {
        transform: translateY(-1rem);
        filter: var(--shadow-title);
    }

    .collaborators {
        display: flex;
        flex-wrap: wrap;
        gap: var(--small-spacing);
    }

    .collaborators a img {
        width: 128px;
        height: 128px;

        border-radius: var(--border-radius);

        transition: all 0.15s ease-in-out;
    }

    .collaborators a img:hover {
        transform: scale(1.1);
    }

    .separator {
        width: 100%;
        padding: 1px;

        background: linear-gradient(to right, transparent 0%, rgb(var(--secondary-color)) 10%, rgb(var(--secondary-color)) 90%, transparent 100%);
    }

    .popup-image {
        display: none;
        flex-direction: column;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: max-content;
        max-width: 85%;
        padding-inline: var(--small-spacing);
        height: 60vh;

        border-radius: var(--border-radius);

        background-color: rgba(var(--darker-primary-color), 0.75);
        backdrop-filter: blur(10px);

        filter: var(--shadow-title);
    }

    .popup-image img {
        position: relative;
        top: 48.8%;
        transform: translateY(-50%);

        width: 90%;
        height: 82%;

        background-color: #00000050;

        align-self: center;
        object-fit: contain;
    }

    .popup-animation {
       animation: appear-popup 0.6s ease-in-out forwards;
    }

    #close-button-popup {
        position: relative;
        top: 1.8rem;
        right: 1.4rem;

        align-self: end;
        cursor: pointer;
    }

    @media (max-width: 1495px) {
        .project-images {
            grid-template:
            "image1 image2"
            "image3 image4";
        }
    }

    @media (max-width: 790px) {
        .project-images {
            grid-template:
            "image1"
            "image2"
            "image3"
            "image4";

            height: 70rem;
        }
    }
</style>