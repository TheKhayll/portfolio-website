// Drop-down menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon to 'X' icon
    navbar.classList.toggle('active'); // Show/hide navbar
}


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


// Read More Toggle
const toggleBtn = document.getElementById('toggleReadMoreBtn');
const readMoreInfo = document.getElementById('read-more-content');

toggleBtn.addEventListener('click', () => {
    let isVisible = readMoreInfo.classList.toggle('show'); // Toggle Show Read More Content
    toggleBtn.textContent = isVisible ? 'Collapse' : 'Read More'; // Change the Text in the Button
});


// Clear form

window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};
