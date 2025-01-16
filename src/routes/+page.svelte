<script lang="ts">
    import { onMount } from "svelte";
    import Window from "$components/tools/window.svelte";
    import Project from "$components/project/project.svelte";
    import MailForm from "$components/mailForm/mailForm.svelte";
    import Seo from "$components/seo/seo.svelte";
    import { programmingLangages } from "../data/tools/programmingLangages";
    import { web } from "../data/tools/webTools";
    import { bdd } from "../data/tools/bddTools";
    import { conception } from "../data/tools/conceptionTools";
    import { projects } from '../data/projects/projects';

    let title = "Jules";

    let innerWidth: number;
    let numberOfColumnsBig: number;
    let numberOfRowsBig: number;
    let numberOfColumnsSmall: number;
    let numberOfRowsSmall: number;

    export let form;

    $:  if (innerWidth <= 660) {
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

    const noteDo = "/sounds/do.mp3";
    const noteRe = "/sounds/re.mp3";
    const noteMi = "/sounds/mi.mp3";
    const noteFa = "/sounds/fa.mp3";
    const noteSol = "/sounds/sol.mp3";

    let confettiCanvas: HTMLCanvasElement;

    // Thanks to Kcreation https://codepen.io/Kcreation-MTech/pen/JjgqWQg
    // TypeScript conversion made by ChatGpt
    interface Confetti {
        x: number;
        y: number;
        size: number;
        color: string;
        speedX: number;
        speedY: number;
        rotation: number;
    }

    const confettis: Confetti[] = [];
    const colors: string[] = ["#FF007A", "#7A00FF", "#00FF7A", "#FFD700", "#00D4FF"];

    function createConfetti(): void {
        const confetti: Confetti = {
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 4.5 + 2,
            rotation: Math.random() * 360,
        };

        confettis.push(confetti);
    }

    function animateConfetti(ctx: CanvasRenderingContext2D): void {
        let offsetSecurity = 50;

        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettis.forEach((confetti, index) => {
            confetti.x += confetti.speedX;
            confetti.y += confetti.speedY;
            confetti.rotation += confetti.speedX;

            ctx.save();
            ctx.translate(confetti.x, confetti.y);
            ctx.rotate((confetti.rotation * Math.PI) / 180);
            ctx.fillStyle = confetti.color;
            ctx.fillRect(-confetti.size / 2, -confetti.size / 2, confetti.size, confetti.size);
            ctx.restore();

            if (confetti.y > confettiCanvas.height + offsetSecurity) {
                confettis.splice(index, 1);
            }
        });

        if (confettis.length > 0) {
            requestAnimationFrame(() => animateConfetti(ctx));
        }
    }

    onMount(() => {
        const ctx = confettiCanvas.getContext("2d");
        if (!ctx) {
            console.error("Canvas rendering context not available.");
            return;
        }

        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

        for (let i = 0; i < 200; i++) {
            createConfetti();
        }

        setTimeout(() => {
            animateConfetti(ctx);
        }, 800);

        const soundDo = new Audio(noteDo);
        const soundRe = new Audio(noteRe);
        const soundMi = new Audio(noteMi);
        const soundFa = new Audio(noteFa);
        const soundSol = new Audio(noteSol);

        const spanDo = document.getElementById("do");
        const spanRe = document.getElementById("re");
        const spanMi = document.getElementById("mi");
        const spanFa = document.getElementById("fa");
        const spanSol = document.getElementById("sol");

        spanDo?.addEventListener("click", () => { soundDo.currentTime = 0; soundDo.play(); });
        spanRe?.addEventListener("click", () => { soundRe.currentTime = 0; soundRe.play(); });
        spanMi?.addEventListener("click", () => { soundMi.currentTime = 0; soundMi.play(); });
        spanFa?.addEventListener("click", () => { soundFa.currentTime = 0; soundFa.play(); });
        spanSol?.addEventListener("click", () => { soundSol.currentTime = 0; soundSol.play(); });
    });
</script>

<svelte:window bind:innerWidth />

<Seo />

<header>
    <canvas bind:this={confettiCanvas} id="confetti"></canvas>

    <h1>
        {#each title as letter, index}
			<span style="animation-delay: {index * 0.2}s">
				{letter}
			</span>
        {/each}
    </h1>

    <p><strong>&lt Développeur & Créatif /&gt</strong></p>

    <a href="/#my-univers" aria-label="Aller à la section 'Mon univers'"><svg id='arrow' width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000' opacity='0'/><g transform="matrix(0.83 0 0 0.83 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(var(--white-color)); fill-rule: nonzero; opacity: 1;" transform=" translate(-13, -12.23)" d="M 13 10.59375 L 21.765625 19.179688 C 22.15625 19.5625 22.78125 19.558594 23.171875 19.171875 L 24.707031 17.636719 C 25.097656 17.242188 25.097656 16.609375 24.703125 16.21875 L 13.707031 5.292969 C 13.511719 5.097656 13.257813 5 13 5 C 12.742188 5 12.488281 5.097656 12.292969 5.292969 L 1.296875 16.21875 C 0.902344 16.609375 0.902344 17.242188 1.292969 17.636719 L 2.828125 19.171875 C 3.21875 19.558594 3.84375 19.5625 4.234375 19.179688 Z" stroke-linecap="round" /></g></svg></a>

    <img id="arm-thumbs-up" class="arm" src="/images/hero-page/arm-thumbs-up.webp" alt="arm-thumbs-up" loading="lazy"/>
    <img id="arm-ok" class="arm" src="/images/hero-page/arm-ok.webp" alt="arm-ok" loading="lazy"/>

    <svg id='star1' class="star-4-point" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'><path d='M25,50c0,0,1.325-8.413,8.957-16.043C41.587,26.325,50,25,50,25l0,0c0,0-8.413-1.325-16.043-8.957C26.325,8.413,25,0,25,0 l0,0c0,0-1.325,8.413-8.957,16.043C8.413,23.675,0,25,0,25l0,0c0,0,8.413,1.325,16.043,8.957C23.675,41.588,25,50,25,50'/></svg>
    <svg id='star2' class="star-4-point" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'><path d='M25,50c0,0,1.325-8.413,8.957-16.043C41.587,26.325,50,25,50,25l0,0c0,0-8.413-1.325-16.043-8.957C26.325,8.413,25,0,25,0 l0,0c0,0-1.325,8.413-8.957,16.043C8.413,23.675,0,25,0,25l0,0c0,0,8.413,1.325,16.043,8.957C23.675,41.588,25,50,25,50'/></svg>
    <svg id='star3' class="star-4-point" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'><path d='M25,50c0,0,1.325-8.413,8.957-16.043C41.587,26.325,50,25,50,25l0,0c0,0-8.413-1.325-16.043-8.957C26.325,8.413,25,0,25,0 l0,0c0,0-1.325,8.413-8.957,16.043C8.413,23.675,0,25,0,25l0,0c0,0,8.413,1.325,16.043,8.957C23.675,41.588,25,50,25,50'/></svg>
</header>

<main>
    <section id="my-univers">
        <h2 class="highlight">Mon univers 🪐</h2>
        <span class="paragraph">
			<p>Je suis un créatif passionné par les défis techniques improbables, qui adore détourner ou automatiser des systèmes pour rendre possible des idées souvent amusantes ou farfelues, tout en y prenant un immense plaisir.</p>
			<p>Un peu <span class="oui-c-est-le-cas">fou</span> peut être, j'ai du mal à m'imaginer autrement. Mais c’est justement cette douce folie qui me permet d’imaginer et de réaliser des projets uniques et ce site sera le reflet de ce que je suis.</p>
			<p>L'une de mes principales qualités, c'est d'aborder la créativité avec légèreté – ça serait ennuyeux autrement. Je pense que c'est cette approche qui m’aide à innover.</p>
			<p>En plus d'être développeur, j'aime passer mon temps à réaliser des photomontages, faire du <span id="do">p</span><span id="re">i</span><span id="mi">a</span><span id="fa">n</span><span id="sol">o</span> ou simplement jouer.</p>
			<p>Si j'arrive à vous rendre heureux en visitant ce site, mon but sera atteint. Bon voyage !</p>
			<a href="/a-propos">Vous voulez en savoir plus ?</a>
		</span>
        <div class="images">
            <img src="/images/my-univers/TerrificOcean.webp" alt="Terrific ocean photoshop" loading="lazy">
            <img src="/images/my-univers/FromTheSpace.webp" alt="From the space photoshop" loading="lazy">
            <img src="/images/my-univers/MozART.webp" alt="MorART photoshop" loading="lazy">
        </div>
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

<style>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;
        background-image: var(--background-pattern-primary-color);
        background-size: 32px 32px;

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

    #confetti {
        position: absolute;
    }

    .star-4-point { /* https://stackoverflow.com/a/45285388 */
        position: absolute;
        background: url("data:image/svg+xml; utf8,");
        background-size: cover;

        transform: rotate(10deg);

        filter: var(--shadow-title);

        animation: twinkle 2s infinite alternate ease-in-out;
    }

    #star1 {
        top: 25%;
        left: 26%;

        height: 92px;
        width: 92px;
    }

    #star1 > path { fill: #FF007A; }

    #star2 {
        top: 58%;
        left: 68%;

        height: 32px;
        width: 32px;

        animation-delay: 0.6s;
    }

    #star2 > path { fill: #FFD700; }

    #star3 {
        top: 68%;
        left: 38%;

        height: 28px;
        width: 28px;

        animation-delay: 0.3s;
    }

    #star3 > path { fill: #00D4FF; }

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

    #my-univers div { grid-area: image; }

    .oui-c-est-le-cas {
        position: relative;
        top: -1px;
        display: inline-block;
        color: rgb(var(--secondary-color));
        font-family: "Comic Sans MS", "Comic Sans", cursive;
        transform: rotate(-10deg);
    }

    #do, #re, #mi, #fa, #sol {
        user-select: none;
        cursor: pointer;
    }

    #do:hover, #re:hover, #mi:hover, #fa:hover, #sol:hover { color: rgb(var(--secondary-color)); }

    .images {
        display: flex;
        align-items: center;
    }

    .images img {
        position: relative;
        object-fit: cover;
        border-radius: var(--border-radius);
        filter: var(--shadow-title);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
    }

    .images img:nth-child(1) {
        top: -1.5rem;
        left: 0;
        width: 18.5vw;
        height: 28vw;
    }

    .images img:nth-child(2) {
        top: 12rem;
        left: -7rem;
        width: 14vw;
        height: 19vw;
    }

    .images img:nth-child(3) {
        top: -1rem;
        left: -12rem;
        width: 17vw;
        height: 21vw;
    }

    .images img:nth-child(1):hover {
        width: 28vw;
        left: -7rem;
    }

    .images img:nth-child(2):hover {
        width: 19vw;
        left: -7.5rem;
    }

    .images img:nth-child(3):hover {
        width: 21vw;
        left: -14.5rem;
    }

    #my-tools {
        min-height: 100vh;
        padding: 12rem 7vw;

        color: rgb(var(--white-color));
        background-image: var(--background-pattern-primary-color);
        background-size: 32px 32px;

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
        background-image: var(--background-pattern-primary-color);
        background-size: 32px 32px;

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

    @keyframes floating {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-25px);
        }
    }

    @keyframes rotating {
        0% {
            transform: rotate(-2deg);
        }
        100% {
            transform: rotate(10deg);
        }
    }

    @keyframes rotating2 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-15deg);
        }
    }

    @keyframes twinkle {
        0% {
            transform: rotate(5deg);
        }
        100% {
            transform: rotate(-5deg);
        }
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

        .images {
            display: flex;
            height: 100%;
            border-radius: var(--border-radius);

            min-height: 0;
        }

        .images img {
            top: 0 !important;
            left: 0 !important;

            width: 33% !important;
            height: 100% !important;
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

        .images { display: none; }
    }
</style>