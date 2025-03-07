<script lang="ts">
	import { onMount } from 'svelte';
	import type { Tweened } from 'svelte/motion';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Mastery } from '../../../data/tools/tool';

    interface Props {
        image: any;
        alt: any;
        description: any;
        mastery: Mastery;
    }

    let {
        image,
        alt,
        description,
        mastery
    }: Props = $props();

    let color: string = $state();
    switch (mastery) {
        case Mastery.Medium:
            color = "#a1d99b";
            break;
		case Mastery.High:
            color = "#74c476";
			break;
        case Mastery.VeryHigh:
		    color = "#41ab5d";
			break;
    }

    let innerWidth: number = $state();
    let innerHeight: number = $state();

    let imgElement: HTMLImageElement = $state();
    let pElement: HTMLParagraphElement = $state();

    let posX: Tweened<number> = $state();
    let posY: Tweened<number> = $state();

    let isHovering = $state(false);

    function handleMouseEnter() {
        isHovering = true;
    }

    function handleMouseLeave() {
        isHovering = false;
    }

    function handleMouseMove(event: MouseEvent) {
        if (!isHovering) return;

        let windowElement = imgElement.parentElement?.parentElement;
        if (!windowElement) return;

		let yOffset = 50;
        posX.set(event.clientX - windowElement?.getBoundingClientRect().x);
        posY.set(event.clientY - windowElement?.getBoundingClientRect().y + yOffset);
    }

    // Set up event listeners for mousemove
    onMount(() => {
        let windowElement = imgElement.parentElement?.parentElement;
        if (!windowElement) return;

        let toolPositionX = imgElement.getBoundingClientRect().x + (pElement.getBoundingClientRect().width / 8) - windowElement?.getBoundingClientRect().x;
        let toolPositionY = imgElement.getBoundingClientRect().y + imgElement.getBoundingClientRect().height - windowElement?.getBoundingClientRect().y;

	    posX = tweened(toolPositionX, { duration: 200, easing: cubicOut });
        posY = tweened(toolPositionY, { duration: 200, easing: cubicOut });

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<p
    class="tool-description"
    style="left: {$posX}px; top: {$posY}px; opacity:{isHovering ? 1 : 0};"
    bind:this={pElement}
>
    {description}
    <br>
    Maîtrise: <span style="color:{color}">{mastery}</span>
</p>
<img
    class="tool"
    src="{image}"
    alt="{alt}"
    loading="lazy"
    bind:this={imgElement}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
>

<style lang="postcss">
    .tool {
        width: 96px;
        height: 96px;

        border-radius: calc(var(--border-radius) - 24px);
        transition: all 0.1s ease-in-out;
        cursor: pointer;

        object-fit: contain;
    }

    .tool:hover {
        transform: scale(1.1);
    }

    .tool-description {
        position: absolute;

        font-family: var(--paragraph-font);
        font-weight: bold;
        font-size: 1rem;

        border-radius: calc(var(--border-radius) - var(--small-spacing));
        padding: 0.7rem 1rem;

        color: rgb(var(--white-color));
        background-color: rgba(var(--darker-primary-color), 0.7);
        /* backdrop-filter: blur(10px); TODO */

        width: max-content;
        pointer-events: none;

        text-align: center;
        transform: translate(-50%, -50%);

        transition: opacity 0.2s ease-in-out;

        z-index: 10;
    }
</style>