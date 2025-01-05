<script lang="ts">
	import { onMount } from 'svelte';

    export let isClosedMessageVisible;

    onMount(() => {
        const closeButton = document.getElementById("close-button");

        closeButton?.addEventListener("click", () => {
            const parentElement = closeButton.parentElement?.parentElement;
            if (parentElement) {
			    isClosedMessageVisible = true;
                parentElement.remove();
            }
        });
    });
</script>

<div id="titlebar">
    <svg id="close-button" width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#FFF' opacity='0'/><g transform="matrix(1.25 0 0 1.25 12 12)" ><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(var(--white-color)); fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12)" d="M 4.9902344 3.9902344 C 4.583311313762054 3.99034126704891 4.2170253696916875 4.236989835007973 4.06390336887315 4.61400450633962 C 3.9107813680546117 4.991019177671266 4.00135746328929 5.423219223797841 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 C 4.031730979736982 18.54378627693672 3.9264984571322734 18.91623528883332 4.0178557241231125 19.26667551899203 C 4.109212991113951 19.617115749150738 4.382884502828869 19.89078718345139 4.733324758830068 19.98214435131215 C 5.0837650148312665 20.07350151917291 5.456213996960412 19.96826889121244 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 C 18.54378557313715 19.968271794792877 18.916235992218144 20.07350663500295 19.26667805152247 19.982149810984033 C 19.617120110826793 19.89079298696512 19.89079298696512 19.617120110826793 19.982149810984033 19.26667805152247 C 20.07350663500295 18.916235992218144 19.968271794792877 18.54378557313715 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 C 20.00279138203425 5.419539844341691 20.091719755203744 4.97996529943312 19.930965587636003 4.60011851351951 C 19.770211420068257 4.220271727605899 19.392752465942692 3.9780759926381157 18.980469 3.9902344 C 18.72067037618049 3.997975535874743 18.474090604386607 4.1065547057164276 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 C 5.518760128868619 4.0994360568055255 5.260236101227262 3.990250139131801 4.9902344 3.9902344 z" stroke-linecap="round" /></g></svg>
</div>

<style>
    #titlebar {
        display: flex;
        align-items: center;

        position: fixed;
        top: var(--small-spacing);

        width: var(--100-width-without-border);
        height: 5.5rem;

        background-color: rgba(var(--darker-primary-color), 0.4);
        backdrop-filter: blur(10px);
    }

    #close-button {
        position: fixed;
        right: 2.5em;
        cursor: pointer;
    }
</style>