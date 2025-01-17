<svg id='star1' class="star-4-point" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'><path d='M25,50c0,0,1.325-8.413,8.957-16.043C41.587,26.325,50,25,50,25l0,0c0,0-8.413-1.325-16.043-8.957C26.325,8.413,25,0,25,0 l0,0c0,0-1.325,8.413-8.957,16.043C8.413,23.675,0,25,0,25l0,0c0,0,8.413,1.325,16.043,8.957C23.675,41.588,25,50,25,50'/></svg>
<svg id='star2' class="star-4-point" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'><path d='M25,50c0,0,1.325-8.413,8.957-16.043C41.587,26.325,50,25,50,25l0,0c0,0-8.413-1.325-16.043-8.957C26.325,8.413,25,0,25,0 l0,0c0,0-1.325,8.413-8.957,16.043C8.413,23.675,0,25,0,25l0,0c0,0,8.413,1.325,16.043,8.957C23.675,41.588,25,50,25,50'/></svg>
<svg id='star3' class="star-4-point" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'><path d='M25,50c0,0,1.325-8.413,8.957-16.043C41.587,26.325,50,25,50,25l0,0c0,0-8.413-1.325-16.043-8.957C26.325,8.413,25,0,25,0 l0,0c0,0-1.325,8.413-8.957,16.043C8.413,23.675,0,25,0,25l0,0c0,0,8.413,1.325,16.043,8.957C23.675,41.588,25,50,25,50'/></svg>

<style lang="postcss">
    .star-4-point { /* https://stackoverflow.com/a/45285388 */
        position: absolute;
        background: url("data:image/svg+xml; utf8,");
        background-size: cover;

        transform: rotate(10deg);

        filter: var(--shadow-title);

        animation: twinkle 2s infinite alternate ease-in-out;
    }

    #star1 {
        top: 25%;
        left: 26%;

        height: 92px;
        width: 92px;
    }

    #star1 > path { fill: #FF007A; }

    #star2 {
        top: 58%;
        left: 68%;

        height: 32px;
        width: 32px;

        animation-delay: 0.6s;
    }

    #star2 > path { fill: #FFD700; }

    #star3 {
        top: 68%;
        left: 38%;

        height: 28px;
        width: 28px;

        animation-delay: 0.3s;
    }

    #star3 > path { fill: #00D4FF; }
</style>