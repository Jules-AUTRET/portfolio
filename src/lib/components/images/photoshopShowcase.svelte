<div class="images">
    <img src="/images/my-univers/TerrificOcean.webp" alt="Terrific ocean photoshop" loading="lazy">
    <img src="/images/my-univers/FromTheSpace.webp" alt="From the space photoshop" loading="lazy">
    <img src="/images/my-univers/MozART.webp" alt="MorART photoshop" loading="lazy">
</div>

<style lang="postcss">
    .images {
        display: flex;
        align-items: center;
        grid-area: image;
    }

    .images img {
        position: relative;
        object-fit: cover;
        border-radius: var(--border-radius);
        filter: var(--shadow-title);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
    }

    .images img:nth-child(1) {
        top: -1.5rem;
        left: 0;
        width: 18.5vw;
        height: 28vw;
    }

    .images img:nth-child(2) {
        top: 12rem;
        left: -7rem;
        width: 14vw;
        height: 19vw;
    }

    .images img:nth-child(3) {
        top: -1rem;
        left: -12rem;
        width: 17vw;
        height: 21vw;
    }

    .images img:nth-child(1):hover {
        width: 28vw;
        left: -7rem;
    }

    .images img:nth-child(2):hover {
        width: 19vw;
        left: -7.5rem;
    }

    .images img:nth-child(3):hover {
        width: 21vw;
        left: -14.5rem;
    }

    @media (max-width: 1495px) {
        .images {
            display: flex;
            height: 100%;
            border-radius: var(--border-radius);

            min-height: 0;
        }

        .images img {
            top: 0 !important;
            left: 0 !important;

            width: 33% !important;
            height: 100% !important;
        }
    }

    @media (max-width: 990px) {
        .images { display: none; }
    }
</style>