<script lang="ts">
	let title = "Jules"
</script>

<header>
	<h1>
		{#each title as letter, index}
			<span style="animation-delay: {index * 0.15}s">
				{letter}
			</span>
		{/each}
	</h1>
	<p><strong>&lt Développeur & Créatif /&gt</strong></p>
</header>

<main>

</main>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: 100vh;
		background-color: rgb(var(--primary-color));
		/* thanks to https://www.magicpattern.design/tools/css-backgrounds */
		background-image:  linear-gradient(rgb(var(--lighter-primary-color)) 1px, transparent 1px), linear-gradient(to right, rgb(var(--lighter-primary-color)) 1px, rgb(var(--primary-color)) 1px);
		background-size: 32px 32px;
	}

	header h1 {
		font-family: var(--hero-page-title-font);
		font-size: var(--hero-page-title-font-size);

		color: rgb(var(--white-color));
	}

	header h1 span {
		display: inline-block;
		animation: floating 1.8s infinite alternate ease-in-out;
	}

	header p {
		position: relative;
		bottom: 0.8rem;

		font-family: var(--title-font);
		font-size: var(--hero-page-detail-title-font-size);

		color: rgba(var(--white-color), 0.7);
	}

	@keyframes floating {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-20px);
	    }
	}
</style>