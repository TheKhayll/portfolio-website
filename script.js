let dot = document.getElementById('home-dot');
let dot2 = document.getElementById('home-dot-2');
let dot3 = document.getElementById('home-dot-3');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    dot.style.bottom = value * -0.03 + '%';
    dot2.style.bottom = value * 0.2 + 'px';
    dot3.style.bottom = value * 0.08 + 'px';
})