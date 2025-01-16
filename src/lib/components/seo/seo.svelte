<script lang="ts">
    let title = "Jules AUTRET";
    let description = "Je suis un créatif passionné par les défis techniques improbables, détourner ou automatiser des systèmes pour rendre possible des idées souvent amusantes ou complètement connes, tout en y prenant un immense plaisir.";
    let url = "jules-autret.dev";
    let image = "";
</script>

<svelte:head>
    <!-- Titre de la page -->
    <title>Jules AUTRET</title>
    <meta name="description" content={description} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <!-- Autres métadonnées importantes -->
    <meta name="author" content="Jules AUTRET" />
</svelte:head>