
window.addEventListener('load', () => {
    // Left

    if (screen.width > 992) {
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
    }

    if (screen.width < 992){
        gsap.to('#js', {
            duration: 1,
            opacity: 0.5,
            y: -125
        });
    
        gsap.to('#html',{
            delay: 1,
            duration: 1,
            opacity: 0.5,
            y: 110
        });
    
        gsap.to('#css',{
            delay:2,
            duration: 1,
            opacity: 0.5,
            y:-125
        });
    
        // Right
        gsap.to('#py',{
            duration: 1,
            opacity: 0.5,
            y: -125        
        });
    
        gsap.to('#node',{
            delay: 1,
            duration: 1,
            opacity: 0.5,
            y: 110
        });
    
        gsap.to('#php',{
            delay:2,
            duration: 1,
            opacity: 0.5,
            y:-125
        });
    }

    if (screen.width < 576){
        gsap.to('#js', {
            duration: 1,
            opacity: 0.5,
            y: -135
        });
    
        gsap.to('#html',{
            delay: 1,
            duration: 1,
            opacity: 0.5,
            y: 130
        });
    
        gsap.to('#css',{
            delay:2,
            duration: 1,
            opacity: 0.5,
            y:-135
        });
    
        // Right
        gsap.to('#py',{
            duration: 1,
            opacity: 0.5,
            y: -135        
        });
    
        gsap.to('#node',{
            delay: 1,
            duration: 1,
            opacity: 0.5,
            y: 130
        });
    
        gsap.to('#php',{
            delay:2,
            duration: 1,
            opacity: 0.5,
            y:-135
        });
    }
    
})
