<script lang="ts">
    import { run } from 'svelte/legacy';

    import { onMount } from "svelte";
    import Window from "$components/tools/window.svelte";
    import Project from "$components/project/project.svelte";
    import MailForm from "$components/mailForm/mailForm.svelte";
    import Seo from "$components/seo/seo.svelte";
    import Confetti from "$components/confetti/confetti.svelte";
    import Piano from "$components/funText/piano.svelte";
    import Photoshop from "$components/images/photoshopShowcase.svelte";
    import Stars from "$components/images/stars.svelte"
    import { programmingLangages } from "../data/tools/programmingLangages";
    import { web } from "../data/tools/webTools";
    import { bdd } from "../data/tools/bddTools";
    import { conception } from "../data/tools/conceptionTools";
    import { projects } from '../data/projects/projects';

    let title = "Jules";

    let innerWidth: number = $state();
    let numberOfColumnsBig: number = $state();
    let numberOfRowsBig: number = $state();
    let numberOfColumnsSmall: number = $state();
    let numberOfRowsSmall: number = $state();

    let { form } = $props();

    run(() => {
        if (innerWidth <= 660) {
                numberOfColumnsBig = 2;
                numberOfRowsBig = 5;

                numberOfColumnsSmall = 2;
                numberOfRowsSmall = 2;

            } else if (innerWidth <= 780) {
                numberOfColumnsBig = 3;
                numberOfRowsBig = 4;

                numberOfColumnsSmall = 3;
                numberOfRowsSmall = 2;
            } else if (innerWidth <= 1815) {
                numberOfColumnsBig = 4;
                numberOfRowsBig = 3;

                numberOfColumnsSmall = 4;
                numberOfRowsSmall = 1;
            } else {
                numberOfColumnsBig = 3;
                numberOfRowsBig = 4;

                numberOfColumnsSmall = 3;
                numberOfRowsSmall = 4;
            }
    });
</script>

<svelte:window bind:innerWidth />

<Seo />

<header>
    <Confetti />

    <h1>
        {#each title as letter, index}
			<span style="animation-delay: {index * 0.2}s">
				{letter}
			</span>
        {/each}
    </h1>

    <p><strong>&lt Développeur & Créatif /&gt</strong></p>

    <a href="/#my-univers" aria-label="Aller à la section 'Mon univers'"><svg id='arrow' width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000' opacity='0'/><g transform="matrix(0.83 0 0 0.83 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(var(--white-color)); fill-rule: nonzero; opacity: 1;" transform=" translate(-13, -12.23)" d="M 13 10.59375 L 21.765625 19.179688 C 22.15625 19.5625 22.78125 19.558594 23.171875 19.171875 L 24.707031 17.636719 C 25.097656 17.242188 25.097656 16.609375 24.703125 16.21875 L 13.707031 5.292969 C 13.511719 5.097656 13.257813 5 13 5 C 12.742188 5 12.488281 5.097656 12.292969 5.292969 L 1.296875 16.21875 C 0.902344 16.609375 0.902344 17.242188 1.292969 17.636719 L 2.828125 19.171875 C 3.21875 19.558594 3.84375 19.5625 4.234375 19.179688 Z" stroke-linecap="round" /></g></svg></a>

    <img id="arm-thumbs-up" class="arm" src="/images/hero-page/arm-thumbs-up.webp" alt="arm-thumbs-up"/>
    <img id="arm-ok" class="arm" src="/images/hero-page/arm-ok.webp" alt="arm-ok"/>

    <Stars />
</header>

<main>
    <section id="my-univers">
        <h2 class="highlight">Mon univers 🪐</h2>
        <span class="paragraph">
			<p>Je suis un créatif passionné par les défis techniques improbables, qui adore détourner ou automatiser des systèmes pour rendre possible des idées souvent amusantes ou farfelues, tout en y prenant un immense plaisir.</p>
			<p>Un peu <span class="oui-c-est-le-cas">fou</span> peut être, j'ai du mal à m'imaginer autrement. Mais c’est justement cette douce folie qui me permet d’imaginer et de réaliser des projets uniques et ce site sera le reflet de ce que je suis.</p>
			<p>L'une de mes principales qualités, c'est d'aborder la créativité avec légèreté – ça serait ennuyeux autrement. Je pense que c'est cette approche qui m’aide à innover.</p>
			<p>En plus d'être développeur, j'aime passer mon temps à réaliser des photomontages, faire du <Piano /> ou simplement jouer.</p>
			<p>Si j'arrive à vous rendre heureux en visitant ce site, mon but sera atteint. Bon voyage !</p>
			<a href="/a-propos">Vous voulez en savoir plus ?</a>
		</span>

        <Photoshop />
    </section>
    <section id="my-tools">
        <h2 class="highlight">Mes outils</h2>
        <div id="windows">
            <Window
                numberOfColumns={numberOfColumnsBig}
                numberOfRows={numberOfRowsBig}
                gridPositionName="programmation"
                listTools={programmingLangages}
            />
            <Window
                numberOfColumns={numberOfColumnsSmall}
                numberOfRows={numberOfRowsSmall}
                gridPositionName="conception"
                listTools={conception}
            />
            <Window
                numberOfColumns={numberOfColumnsSmall}
                numberOfRows={numberOfRowsSmall}
                gridPositionName="BDD"
                listTools={bdd}
            />
            <Window
                numberOfColumns={numberOfColumnsBig}
                numberOfRows={numberOfRowsBig}
                gridPositionName="web"
                listTools={web}
            />
        </div>
    </section>
    <section id="my-projects">
        <h2 class="highlight">Mes projets ✨</h2>
        <div id="projects">
            {#each projects as project}
                <Project
                    project={project.data}
                />
            {/each}
        </div>
    </section>
    <section id="contact">
        <h2 class="highlight">Contactez moi !</h2>
        <MailForm message={form} />
    </section>
</main>

<style lang="postcss">
    @import "/colors.css";
    @import "/fonts.css";
    @import "/spacing.css";
    @import "/animations.css";

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;
        @mixin fabric-background;

        filter: var(--shadow-title);
    }

    header h1 {
        display: flex;
        gap: var(--very-small-spacing);

        font-family: var(--hero-page-title-font);
        font-size: var(--hero-page-title-font-size);

        color: rgb(var(--white-color));
    }

    header h1 span {
        display: inline-block;
        animation: floating 1.8s infinite alternate ease-in-out;
        filter: var(--shadow-title);
    }

    header p {
        position: relative;
        bottom: 1.2rem;

        font-family: var(--title-font);
        font-size: var(--hero-page-detail-title-font-size);

        color: rgba(var(--white-color), 0.60);
    }

    #arrow {
        position: absolute;
        top: 77%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(180deg);
        cursor: pointer;
    }

    .arm {
        position: absolute;
        user-select: none;
    }

    #arm-thumbs-up {
        width: 30%;
        right: -1%;
        transform-origin: 100% 70%;
        animation: rotating 1.8s infinite alternate ease-in-out;
        filter: var(--shadow-title);
    }

    #arm-ok {
        width: 39%;
        top: 45%;
        left: -6%;
        transform-origin: 0 80%;
        animation: rotating2 2.2s infinite alternate ease-in-out;
        filter: var(--shadow-title) brightness(1.15) saturate(0.85);
    }

    .paragraph {
        display: flex;
        flex-direction: column;
        gap: var(--small-spacing)
    }

    #my-univers {
        display: grid;
        grid-template-rows: 4rem auto;
        grid-template-columns: 52.5% 47.5%;
        grid-template-areas:
			"title image"
			"description image";
        gap: var(--large-spacing);
        min-height: 100vh;
        padding: 14rem 7vw;
        background-color: rgba(var(--primary-color), 0.2);
    }

    #my-univers h2 {
        grid-area: title;
        color: rgb(var(--darker-primary-color));
    }

    #my-univers p {
        grid-area: description;
        width: 95%;
    }

    #my-univers a {
        width: max-content;
        text-decoration: underline;
        color: rgba(var(--darker-primary-color), 0.6);
    }

    .oui-c-est-le-cas {
        position: relative;
        top: -1px;
        display: inline-block;
        color: rgb(var(--secondary-color));
        font-family: "Comic Sans MS", "Comic Sans", cursive;
        transform: rotate(-10deg);
    }

    #my-tools {
        min-height: 100vh;
        padding: 12rem 7vw;

        color: rgb(var(--white-color));
        @mixin fabric-background;

        filter: var(--shadow-title-invert) var(--shadow-title);
    }

    #my-tools h2 {
        margin-bottom: var(--large-spacing);
        margin-inline: auto;
    }

    #windows {
        display: grid;
        place-items: center;

        grid-template:
			"programmation BDD conception web";
    }

    #contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--large-spacing);

        min-height: 100vh;
        padding: 12rem 7vw;

        color: rgb(var(--white-color));
        @mixin fabric-background;

        filter: var(--shadow-title-invert);
    }

    #my-projects {
        height: max-content;
        padding: 10rem 7vw 10rem 7vw;
        background-color: rgba(var(--primary-color), 0.2);
    }

    #my-projects h2 {
        margin-bottom: var(--large-spacing);
        color: rgb(var(--darker-primary-color));
    }

    #projects {
        display: flex;
        flex-direction: column;
        gap: var(--medium-spacing);
    }

    @media (max-width: 1815px) {
        #my-tools {
            padding: max(8rem, 7vw);
        }
        #windows {
            gap: var(--medium-spacing);
            grid-template:
			"programmation web"
			"BDD conception";
        }
    }

    @media (max-width: 1495px) {
        #my-univers {
            grid-template-areas:
				"title"
				"description"
				"image";
            grid-template-rows: 4rem 1fr 1fr;
            grid-template-columns: 1fr;
            padding: 10rem 7vw 10rem 7vw;
        }
    }

    @media (max-width: 1280px) {
        #my-tools {
            height: max-content;
        }

        #windows {
            grid-template:
			"programmation"
			"web"
            "BDD"
            "conception";
        }

        #arm-thumbs-up, #arm-ok { display: none; }
        #arrow { top: 65%; }
    }

    @media (max-width: 990px) {
        header p {
            bottom: 0.5rem;
        }

        #projects {
            gap: var(--xxl-spacing);
        }

        #contact {
            height: max-content;
        }

        #my-tools {
            padding-inline: 0;
        }

        #my-univers {
            min-height: 0;
            grid-template-rows: 4rem 1fr;
        }
    }
</style>