<script lang="ts">
    import { onMount } from 'svelte';

    const noteDo = "/sounds/do.mp3";
    const noteRe = "/sounds/re.mp3";
    const noteMi = "/sounds/mi.mp3";
    const noteFa = "/sounds/fa.mp3";
    const noteSol = "/sounds/sol.mp3";

    onMount(() => {
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

<span id="do">p</span><span id="re">i</span><span id="mi">a</span><span id="fa">n</span><span id="sol">o</span>

<style lang="postcss">
    #do, #re, #mi, #fa, #sol {
        user-select: none;
        cursor: pointer;
    }

    #do:hover, #re:hover, #mi:hover, #fa:hover, #sol:hover { color: rgb(var(--secondary-color)); }
</style>