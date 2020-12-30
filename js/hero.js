
window.addEventListener('load', () => {
    // Left
    gsap.to('#js', {
        duration: 1,
        opacity: 0.5,
        y: -150
    });

    gsap.to('#html',{
        delay: 1,
        duration: 1,
        opacity: 0.5,
        y: 80
    });

    gsap.to('#css',{
        delay:2,
        duration: 1,
        opacity: 0.5,
        y:-150
    });

    // Right
    gsap.to('#py',{
        duration: 1,
        opacity: 0.5,
        y: -150
    });

    gsap.to('#node',{
        delay: 1,
        duration: 1,
        opacity: 0.5,
        y: 80
    });

    gsap.to('#php',{
        delay:2,
        duration: 1,
        opacity: 0.5,
        y:-150
    });
})
