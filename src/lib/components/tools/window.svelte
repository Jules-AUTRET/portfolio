<script lang="ts">
    import Tool from "./tool.svelte";

    export let numberOfColumns: number = 3;
    export let numberOfRows: number;
    export let gridPositionName: string;
    export let listTools;

    $: gridTemplate = `repeat(${numberOfRows}, 1fr) / repeat(${numberOfColumns}, 1fr)`;
</script>

<div class="window" style="grid-area: {gridPositionName}">
    <div class="header">
        <p>{gridPositionName.charAt(0).toUpperCase() + gridPositionName.slice(1)}</p>
        <div class="buttons">
            <div class="button red"></div>
            <div class="button yellow"></div>
            <div class="button green"></div>
        </div>
    </div>
    <div class="tools" style="grid-template: {gridTemplate}">
        {#each listTools as tool}
            <Tool
                image={tool.image}
                alt={tool.alt}
                description={tool.description}
                mastery={tool.mastery}
            />
        {/each}
    </div>
</div>


<style>
    .window {
        position: relative;
        width: max-content;
        padding: 16px 24px 24px 24px;

        border-radius: var(--border-radius);

        background-color: rgb(var(--darker-primary-color), 0.4);
        backdrop-filter: blur(1px);

        z-index: 0;
    }

    .tools {
        display: grid;
        gap: var(--small-spacing);
        margin-top: var(--small-spacing);
    }

    .header {
        display: flex;
        border-bottom: 1px solid rgb(var(--white-color));
    }

    .header p {
        position: relative;
        text-align: left;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 0.8rem;
        font-family: var(--paragraph-font);
        font-size: 1.3rem;
        font-weight: bold;
    }

    .buttons {
        display: flex;
        gap: 0.3rem;
        position: relative;
        top: 6px;
        margin-left: auto;
    }

    .button {
        width: 16px;
        height: 16px;

        border-radius: 50%;
    }

    .red { background-color: #FF007A; }
    .yellow { background-color: #FFD700; }
    .green { background-color: #00FF7A; }

    @media (max-width: 1815px) {
        :global(#windows .window:nth-child(odd)) {
            place-self: end;
        }

        :global(#windows .window:nth-child(even)) {
            place-self: start;
        }
    }
</style>