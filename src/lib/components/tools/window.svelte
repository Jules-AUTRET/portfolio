<script lang="ts">
    import Tool from "./tool.svelte";

    interface Props {
        numberOfColumns?: number;
        numberOfRows: number;
        gridPositionName: string;
        listTools: any;
    }

    let {
        numberOfColumns = 3,
        numberOfRows,
        gridPositionName,
        listTools
    }: Props = $props();

    let gridTemplate = $derived(`repeat(${numberOfRows}, 1fr) / repeat(${numberOfColumns}, 1fr)`);
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


<style lang="postcss">
    .window {
        position: relative;
        width: max-content;
        padding: 16px 24px 24px 24px;

        border-radius: var(--border-radius);

        background-color: rgb(var(--darker-primary-color), 0.4);
        /*backdrop-filter: blur(1px); TODO fix this on linux firefox */
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
        color: var(--white-color);
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

    .red { background-color: rgb(var(--red-color)); }
    .yellow { background-color: rgb(var(--yellow-color)); }
    .green { background-color: rgb(var(--green-color)); }

    @media (max-width: 1815px) {
        :global(#windows .window:nth-child(odd)) {
            place-self: end;
        }

        :global(#windows .window:nth-child(even)) {
            place-self: start;
        }
    }
    
    @media (max-width: 1280px) {
        :global(#windows .window) {
            place-self: center !important;
        }
    }

    @media (max-width: 660px) {
        .buttons {
            display: none;
        }
    }
</style>