// JavaScript Document
var faders = document.querySelectorAll('.fade-in');
var landenKnop = document.querySelector('.landenknop')
var landenOverlay = document.querySelector('.landenoverlay')


var appearOptions = {
    treshold: 1,
    rootMargin: "0px 0px -200px 0px",
};

var appearOnScroll = new IntersectionObserver
( function(
        entries,
        appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear'); 
            appearOnScroll.unobserve(entry.target);
            }
        });
    },  
    appearOptions);

    faders.forEach(fader => { 
        appearOnScroll.observe(fader);
    })

    landenKnop.addEventListener("click", openMenu);

    function openMenu(){
        landenOverlay.classList.toggle("visible");
    }
