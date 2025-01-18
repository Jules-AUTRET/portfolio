<script lang="ts">
    import { onMount } from 'svelte';

    let confettiCanvas: HTMLCanvasElement = $state();

    // Thanks to Kcreation https://codepen.io/Kcreation-MTech/pen/JjgqWQg
    // TypeScript conversion made by ChatGpt
    interface Confetti {
        x: number;
        y: number;
        size: number;
        color: string;
        speedX: number;
        speedY: number;
        rotation: number;
    }

    const confettis: Confetti[] = [];
    const colors: string[] = ["#FF007A", "#7A00FF", "#00FF7A", "#FFD700", "#00D4FF"];

    function createConfetti(): void {
        const confetti: Confetti = {
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 4.5 + 2,
            rotation: Math.random() * 360,
        };

        confettis.push(confetti);
    }

    function animateConfetti(ctx: CanvasRenderingContext2D): void {
        let offsetSecurity = 50;

        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettis.forEach((confetti, index) => {
            confetti.x += confetti.speedX;
            confetti.y += confetti.speedY;
            confetti.rotation += confetti.speedX;

            ctx.save();
            ctx.translate(confetti.x, confetti.y);
            ctx.rotate((confetti.rotation * Math.PI) / 180);
            ctx.fillStyle = confetti.color;
            ctx.fillRect(-confetti.size / 2, -confetti.size / 2, confetti.size, confetti.size);
            ctx.restore();

            if (confetti.y > confettiCanvas.height + offsetSecurity) {
                confettis.splice(index, 1);
            }
        });

        if (confettis.length > 0) {
            requestAnimationFrame(() => animateConfetti(ctx));
        }
    }

    onMount(() => {
        const ctx = confettiCanvas.getContext("2d");
        if (!ctx) {
            console.error("Canvas rendering context not available.");
            return;
        }

        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

        for (let i = 0; i < 200; i++) {
            createConfetti();
        }

        setTimeout(() => {
            animateConfetti(ctx);
        }, 800);
    });
</script>

<canvas bind:this={confettiCanvas} id="confetti"></canvas>

<style lang="postcss">
    #confetti {
        position: absolute;
    }
</style>