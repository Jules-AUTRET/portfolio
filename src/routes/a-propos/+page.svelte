<script lang="ts">
    import { onMount } from 'svelte';
    import Seo from "$components/seo/seo.svelte";

    const birthDate = new Date("2004-07-21");

    const differenceDate = Date.now() - birthDate.getTime();
    const age = Math.floor((differenceDate / (1000 * 3600 * 24)) / 365.25);

    let topSecret: HTMLImageElement;
    const weirdCodeWithoutAnyMeaning: string[] = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let anotherListOfStringWithImSureNoMeaning: string[] = [];

    onMount(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key !== weirdCodeWithoutAnyMeaning[anotherListOfStringWithImSureNoMeaning.length]) {
                anotherListOfStringWithImSureNoMeaning = [];
                return;
            }

            anotherListOfStringWithImSureNoMeaning.push(e.key);

            if (weirdCodeWithoutAnyMeaning.length === anotherListOfStringWithImSureNoMeaning.length) {
                anotherListOfStringWithImSureNoMeaning = [];
                topSecret.src = "/images/moitransparent-topsecret.webp";
            }
        });
    });
</script>

<Seo />

<section id="a-propos">
    <div id="detail">
        <div id="detail-title">
            <h2 class="highlight">Ça c'est moi 👀</h2>
            <div id="social-links">
                <a href="https://linkedin.com/in/jules-autret-0219aa267/" aria-label="Linkedin link"><svg id='LinkedIn_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(0.77 0 0 0.77 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-13, -13)" d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" stroke-linecap="round" /></g></svg></a>
                <a href="https://github.com/Jules-AUTRET" aria-label="Github link"><svg id='Developer_Community_Github_1_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(0.84 0 0 0.84 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-11.96, -11.99)" d="M 12 0.28 C 6.098252465408197 0.2782466100445683 1.0713369325350737 4.56813440644629 0.14513215507470534 10.39675103019556 C -0.781072622385663 16.225367653944833 2.66842121107198 21.862211573488384 8.280000000000006 23.69 L 8.559999999999999 23.69 C 8.815438071898866 23.702452664903685 9.065939870559836 23.61656633393421 9.259999999999998 23.450000000000003 C 9.496390610383417 23.244110850317806 9.628423777236597 22.94336863693001 9.619999999999997 22.630000000000003 L 9.619999999999997 22.42 C 9.619999999999997 22.25 9.619999999999997 22.020000000000003 9.619999999999997 21.330000000000002 C 9.603746178649041 21.19888327842309 9.535232818561344 21.07988638984972 9.43 21 C 9.31478582381213 20.90779808034084 9.16472722440962 20.871198421949984 9.02 20.9 C 6.33 21.479999999999997 5.76 19.799999999999997 5.7299999999999995 19.689999999999998 C 5.391740989702869 18.799760908455 4.787745415959078 18.035165355565464 3.9999999999999973 17.5 L 3.85 17.39 C 3.968080110085959 17.33295898015868 4.099345226975556 17.308778563889543 4.23 17.32 C 4.736716817123001 17.396205298158666 5.16796239991391 17.729096625225335 5.369999999999999 18.2 C 6.174020607887509 19.59995413886067 7.941740729357663 20.112592974087015 9.370000000000001 19.36 C 9.520500824579802 19.293127548861687 9.631363311509492 19.16009256454606 9.67 19 C 9.710540749821037 18.540962192284237 9.908356277706403 18.110006935105407 10.23 17.78 C 10.381575758129557 17.649281611301305 10.440589822338778 17.440765251095396 10.38 17.25 C 10.324146250427432 17.058815027773775 10.158122779981506 16.9204621357355 9.96 16.9 C 7.590000000000001 16.63 5.160000000000001 15.799999999999999 5.160000000000001 11.709999999999997 C 5.142739190369246 10.681509779546193 5.522359448857235 9.685901931813543 6.219999999999999 8.93 C 6.3487499411756945 8.789005543134985 6.383874428753391 8.58606405935274 6.31 8.41 C 6.033045313688279 7.62993494520463 6.036581392903204 6.777739854407784 6.32 6 C 7.2434362890292805 6.16501622530477 8.110239497520261 6.5605811815605755 8.839999999999998 7.149999999999999 C 8.963083392987755 7.234144309506396 9.118279536069963 7.256315187089569 9.26 7.21 C 10.153843741384668 6.971618416439924 11.0749151112995 6.85060174010075 11.999999999999993 6.8500000000000005 C 12.928696928667991 6.845594621706379 13.853731262974357 6.966690025470121 14.75 7.209999999999999 C 14.888446564249431 7.256172161939185 15.040589461551406 7.233907347699872 15.16 7.15 C 15.888836095927394 6.55908765301028 16.756041266031648 6.163339261891276 17.68 6.000000000000001 C 17.95467786444122 6.769557725387749 17.954677864441216 7.61044227461225 17.68 8.379999999999999 C 17.6060619312562 8.557705606573853 17.645424906617095 8.762393078450511 17.78 8.899999999999999 C 18.46682977633852 9.64987691201743 18.842277113473305 10.63319136641805 18.830000000000002 11.649999999999995 C 18.830000000000002 15.749999999999998 16.400000000000002 16.57 14.020000000000003 16.83 C 13.821877220018498 16.8504621357355 13.655853749572572 16.988815027773775 13.600000000000003 17.18 C 13.541059682842885 17.367728421333837 13.600129947588504 17.57250533911865 13.750000000000004 17.7 C 14.197575823466481 18.16721976292178 14.42016531812037 18.805796182010805 14.360000000000003 19.45 L 14.360000000000003 22.63 C 14.35547712696017 22.944709286925274 14.491043378451645 23.24515341185232 14.730000000000002 23.45 C 15.032148842074534 23.68027070283074 15.426681982533179 23.750988907252573 15.790000000000003 23.64 C 21.334673471977148 21.753157207373853 24.707225262630885 16.13930104266253 23.769244145594328 10.357971519186536 C 22.831263028557768 4.576641995710542 17.856808720153 0.31703039929681154 11.999999999999998 0.28000000000000114 Z" stroke-linecap="round" /></g></svg></a>
                <a href="https://discordapp.com/users/305420056953749506" aria-label="Discord link"><svg id='Discord_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(0.91 0 0 0.91 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12)" d="M 19.952 5.672 C 18.048000000000002 4.141 15.036000000000001 3.8819999999999997 14.908000000000001 3.8709999999999996 C 14.707 3.8539999999999996 14.516000000000002 3.9679999999999995 14.434000000000001 4.151999999999999 C 14.428 4.163999999999999 14.362000000000002 4.3149999999999995 14.289000000000001 4.549999999999999 C 15.548000000000002 4.761999999999999 17.095000000000002 5.189999999999999 18.495 6.058999999999999 C 18.719 6.1979999999999995 18.788 6.492999999999999 18.649 6.717999999999999 C 18.559 6.863999999999999 18.402 6.943999999999999 18.242 6.943999999999999 C 18.156000000000002 6.943999999999999 18.069000000000003 6.920999999999999 17.990000000000002 6.871999999999999 C 15.584 5.38 12.578 5.305 12 5.305 C 11.422 5.305 8.415 5.38 6.011 6.872 C 5.7860000000000005 7.012 5.492 6.942 5.352 6.718 C 5.212000000000001 6.493 5.282 6.199 5.506 6.059 C 6.906000000000001 5.191 8.452 4.7620000000000005 9.712 4.550000000000001 C 9.638 4.314000000000001 9.572 4.164000000000001 9.567 4.152000000000001 C 9.484 3.968 9.294 3.852 9.092 3.872 C 8.965 3.8819999999999997 5.953000000000001 4.141 4.023000000000001 5.694 C 3.015 6.625 1 12.073 1 16.783 C 1 16.866 1.022 16.948 1.063 17.02 C 2.4539999999999997 19.463 6.247999999999999 20.103 7.1129999999999995 20.131 C 7.117999999999999 20.131 7.122999999999999 20.131 7.127999999999999 20.131 C 7.280999999999999 20.131 7.424999999999999 20.058 7.514999999999999 19.934 L 8.389999999999999 18.732 C 6.030999999999999 18.122 4.825999999999999 17.087 4.7559999999999985 17.026 C 4.557999999999998 16.851 4.538999999999999 16.549 4.713999999999999 16.351 C 4.8889999999999985 16.153 5.189999999999999 16.134 5.387999999999999 16.308 C 5.416999999999999 16.334 7.635999999999999 18.217 12 18.217 C 16.372 18.217 18.591 16.326 18.613 16.307 C 18.811 16.134999999999998 19.113 16.153 19.287 16.352 C 19.461 16.55 19.442 16.851 19.244999999999997 17.025 C 19.174999999999997 17.087 17.97 18.121 15.610999999999997 18.730999999999998 L 16.485999999999997 19.933 C 16.575999999999997 20.057 16.72 20.13 16.872999999999998 20.13 C 16.877999999999997 20.13 16.883 20.13 16.887999999999998 20.13 C 17.752999999999997 20.102999999999998 21.546999999999997 19.462999999999997 22.938 17.019 C 22.978 16.947 23 16.866 23 16.783 C 23 12.073 20.985 6.625 19.952 5.672 z M 8.891 14.87 C 7.967 14.87 7.2170000000000005 14.013 7.2170000000000005 12.956999999999999 C 7.2170000000000005 11.900999999999998 7.966 11.043999999999999 8.891 11.043999999999999 C 9.815999999999999 11.043999999999999 10.565 11.900999999999998 10.565 12.956999999999999 C 10.565 14.013 9.816 14.87 8.891 14.87 z M 15.109 14.87 C 14.185 14.87 13.435 14.013 13.435 12.956999999999999 C 13.435 11.900999999999998 14.184000000000001 11.043999999999999 15.109 11.043999999999999 C 16.033 11.043999999999999 16.783 11.900999999999998 16.783 12.956999999999999 C 16.783 14.013 16.033 14.87 15.109 14.87 z" stroke-linecap="round" /></g></svg></a>
            </div>
        </div>
        <div id="detail-text">
            <p>Salut ! Je suis Jules AUTRET, développeur passionné et curieux de nature qui adore explorer les frontières entre créativité et technologie. Né un 21 juillet, j'ai actuellement {age} ans et je consacre mon énergie à créer, apprendre et coder des projets qui ont du sens, tout en gardant un amour et une passion pour ce qui n'en ont pas toujours.</p>
            <h3>Mon parcours : Pourquoi l'informatique ?</h3>
            <p>Depuis mes premiers pas avec Scratch au collège jusqu'à mes projets plus avancés aujourd'hui, je pense que j'ai toujours aimé ça. Depuis, j’ai appris à maîtriser des langages comme C, Java, C#, du web avec HTML, CSS, JS et tous les frameworks que je découvre ou encore Python celui avec qui tout a commencé. <br><br> Aujourd'hui, je poursuis un BUT informatique  à l’<a href="https://iut-lannion.univ-rennes.fr/">IUT de Lannion</a>.</p>
            <h3>Pourquoi collaborer avec moi ?</h3>
            <p>Comme vous avez pu le comprendre, j'essaie de vivre dans un univers où rigueur et créativité cohabitent ensemble. Je suis convaincu qu'une approche légère permet d'innover, tout en rendant les projets plus agréable pour tout le monde. Je suis curieux, sérieux et j'adore les défis techniques, j'espère que cela vous convainc.</p>
        </div>
        <div id="detail-images">
            <img id="non-transparent" src="/images/a-propos/background.webp" alt="Background" loading="lazy">
            <img id="transparent" src="/images/a-propos/moi.webp" alt="Moi" bind:this={topSecret} loading="lazy">
        </div>
    </div>
</section>

<style lang="postcss">
    @import "/colors.css";
    @import "/fonts.css";
    @import "/spacing.css";

    #a-propos {
        height: var(--100-height-without-border);

        padding: 10rem 7vw;

        @mixin fabric-background;

        color: rgb(var(--white-color));

        overflow: hidden;
    }

    #a-propos h2 {
        grid-row: 1;
        margin-bottom: var(--large-spacing);
    }

    #a-propos h3 {
        margin-bottom: var(--small-spacing);
    }

    #a-propos p {
        margin-bottom: var(--large-spacing);
    }

    #social-links {
        display: flex;
        gap: var(--small-spacing);
        grid-row: 1;
        justify-self: end;

        position: relative;
        top: 1rem;
    }

    #social-links a svg {
        width: 38px;
        height: 38px;

        filter: var(--shadow-title);

        transition: all 0.1s ease-in-out;
    }

    #social-links a:hover svg {
        transform: scale(1.1);
    }

    #social-links a svg g path {
        fill: rgb(var(--white-color)) !important;
    }

    #detail {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
    }

    #detail-title {
        display: grid;
    }

    #detail-text {
        grid-column: 1;
    }

    #detail-text p, #detail-text a {
        color: rgba(var(--white-color), 0.8);
    }

    #detail-text p a {
        text-decoration: underline;
    }

    #detail-images {
        grid-column: 2;
        position: relative;
        top: 15rem;
        left: var(--large-spacing);
        filter: var(--shadow-title) brightness(1.05) saturate(0.80) contrast(0.92) hue-rotate(-5deg);
    }

    #detail-images img {
        width: 100%;
        object-fit: cover;
        object-position: top;
        border-radius: var(--border-radius);
    }

    #transparent {
        position: relative;
        height: 42rem;
        transform: translateY(-100%);
    }

    #non-transparent {
        height: 18rem;
    }

    @media (max-width: 1000px) {
        #a-propos { height: auto; }
        #detail { grid-template-columns: 1fr; }
        #detail-images { display: none; }
    }

    @media (max-width: 540px) {
        #detail-text h3 { width: auto; }
        #social-links { display: none; }
    }
</style>