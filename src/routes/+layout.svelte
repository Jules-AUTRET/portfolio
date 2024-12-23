<script lang="ts">
	import Navbar from "$components/navbar/navbar.svelte";
	let { children } = $props();
</script>

<div class="main-content">
	<div class="border-cut">
		<Navbar/>

		{@render children()}
	</div>
</div>

<style>
	.main-content {
		padding: var(--small-spacing);
	}

	.border-cut {
		height: calc(100vh - 2 * var(--small-spacing));
        clip-path: inset(0 round var(--border-radius));
	}
</style>
