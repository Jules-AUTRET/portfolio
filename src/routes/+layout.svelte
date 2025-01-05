<script lang="ts">
	import Navbar from "$components/navbar/navbar.svelte";
	import Titlebar from "$components/titlebar/titlebar.svelte";

	let { children } = $props();

	let closedMessageVisible = $state(false);
</script>

{#if closedMessageVisible}
	<div id="why-do-you-do-this">
		<p>
			Eh oh ! Ça se fait pas de fermer le site des gens
			<br>
			ヾ(`ヘ´)ﾉﾞ
		</p>
	</div>
{/if}

<div id="main-content">
	{@render children()}

	<Titlebar bind:isClosedMessageVisible={closedMessageVisible} />
	<Navbar />
</div>

<div id="border-cut"></div>

<style>
	#main-content {
		padding: var(--small-spacing);
	}

	#border-cut {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: var(--100-width-without-border);
		height: var(--100-height-without-border);

		border-radius: var(--border-radius);
		box-shadow: 0 0 0 100px rgb(var(--white-color));

		pointer-events: none;
	}

	#why-do-you-do-this {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100vw;
		height: 100vh;

		background-image: var(--background-pattern-primary-color);
		background-size: 32px 32px;

		color: rgb(var(--white-color));

		font-family: var(--title-font);
		font-size: 4rem;
		text-align: center;
	}

	#why-do-you-do-this p { filter: var(--shadow-title); }
</style>