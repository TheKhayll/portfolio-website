// Parallax for Home Section

let dot = document.getElementById('home-dot');
let dot2 = document.getElementById('home-dot-2');
let dot3 = document.getElementById('home-dot-3');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    dot.style.bottom = value * -0.03 + '%';
    dot2.style.bottom = value * 0.2 + 'px';
    dot3.style.bottom = value * 0.08 + 'px';
});


// Autoplay Video in Project Section

const projVideo = document.getElementById('projVideo');

// Ensure that the autoplay works even if the browser tries to block it.
document.addEventListener('DOMContentLoaded', () => {
    projVideo.muted = true;
    projVideo.play().catch(() => {
        // If blocked, try again after the user interaction
        document.body.addEventListener('click', () => projVideo.play(), { once:true });
    });
});

// Prevent interactions
projVideo.addEventListener('contextmenu', e => e.preventDefault());
projVideo.addEventListener('click', e => e.preventDefault());
projVideo.addEventListener('pause', e => e.preventDefault());