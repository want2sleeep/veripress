<template><div class="container"></div></template>
<style scoped>
:root {
    font-size: 15px;
}
.container {
    background: #e493d0;
    margin: 0;
    min-height: 100vh;
    background-image: radial-gradient(
            closest-side,
            rgba(235, 105, 78, 1),
            rgba(235, 105, 78, 0)
        ),
        radial-gradient(
            closest-side,
            rgba(243, 11, 164, 1),
            rgba(243, 11, 164, 0)
        ),
        radial-gradient(
            closest-side,
            rgba(254, 234, 131, 1),
            rgba(254, 234, 131, 0)
        ),
        radial-gradient(
            closest-side,
            rgba(170, 142, 245, 1),
            rgba(170, 142, 245, 0)
        ),
        radial-gradient(
            closest-side,
            rgba(248, 192, 147, 1),
            rgba(248, 192, 147, 0)
        );
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
        110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
        -30vmax -30vmax, 50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;
}
.container::after {
    content: "";
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
@keyframes movement {
    0%,
    100% {
        background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
            110vmax 110vmax, 90vmax 90vmax;
        background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
            -30vmax -30vmax, 50vmax 50vmax;
    }
    25% {
        background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax,
            100vmax 100vmax, 60vmax 60vmax;
        background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax 20vmax,
            -40vmax -20vmax, 40vmax 60vmax;
    }
    50% {
        background-size: 80vmax 80vmax, 110vmax 110vmax, 89vmax 88vmax,
            60vmax 60vmax, 80vmax 80vmax;
        background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax,
            20vmax 10vmax, 30vmax 70vmax;
    }
    75% {
        background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax,
            90vmax 90vmax, 70vmax 70vmax;
        background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax,
            -10vmax 10vmax, 40vmax 60vmax;
    }
}
</style>
