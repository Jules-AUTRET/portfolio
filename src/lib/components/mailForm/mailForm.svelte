<script lang="ts">
    import { enhance } from '$app/forms';

    let { message } = $props();
</script>

<form method="POST" use:enhance>
    <div class="inline">
        <input type="text" name="name" id="name" placeholder="Entrez votre nom / entreprise" required>
        <input type="email" name="email" id="email" placeholder="Entrez votre email" required>
    </div>
    <textarea name="message" id="message" placeholder="Entrez votre message" required></textarea>
    <button type="submit">Envoyer</button>
    {#if message?.message}
        <p id="form-return">{message.message}</p>
    {/if}
</form>

<style lang="postcss">
    form {
        display: flex;
        flex-direction: column;
        gap: var(--small-spacing);

        width: 80%;
    }

    form .inline {
        display: flex;
        gap: var(--small-spacing);
    }

    input, textarea {
        width: 100%;

        caret-color: rgb(var(--white-color));

        font-family: var(--paragraph-font);
        font-weight: bold;

        color: rgb(var(--white-color));
        padding: var(--medium-spacing);

        /* backdrop-filter: blur(2px); TODO */

        background-color: rgba(var(--darker-primary-color), 0.4);
        border: none;
        border-radius: var(--border-radius);
    }

    input:focus, textarea:focus {
        outline: 3px solid rgb(var(--white-color));
    }

    input:invalid, textarea:invalid {
        outline-color: rgb(var(--red-color));
    }

    textarea {
        height: 22rem;
        min-height: 22rem;
        max-height: 22rem;
        max-width: 100%;
        min-width: 100%;
    }

    input::placeholder, textarea::placeholder {
        color: rgba(var(--white-color), 0.8);
    }

    button[type="submit"] {
        height: 3rem;

        font-family: var(--paragraph-font);
        font-weight: bold;

        color: rgb(var(--white-color));
        background-color: rgb(var(--darker-primary-color));

        border-radius: var(--border-radius);

        cursor: pointer;
        border: none;
    }

    #form-return {
        text-align: center;
        font-family: var(--paragraph-font);
        font-size: 1rem;
        font-weight: bold;

        color: rgb(var(--white-color));
    }

    @media (max-width: 990px) {
        form {
            width: 90%;
        }

        .inline {
            flex-direction: column;
        }
    }
</style>