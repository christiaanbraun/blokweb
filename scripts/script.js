// JavaScript Document
// Menu fold open
var menuButton = document.querySelector('header button');
var body = document.querySelector('body');

// Filter fold-open
var filterButton = document.querySelector('section.filter button');
var filterSection = document.querySelector('section.filter')

// de faders 
var faders = document.querySelectorAll('.fade-in');

// de sliders
var sliders = document.querySelectorAll('.slide-in');

// Landenmenu footer
var landenKnop = document.querySelector('.landenknop');

var landenOverlay = document.querySelector('.landenoverlay');



// Menu openen functie enzooooo
menuButton.addEventListener("click", openNav);

if (filterButton){
filterButton.addEventListener("click", openFilter)
}

function openNav(){
    body.classList.toggle('visible');

}

function openFilter(){
    filterSection.classList.toggle('visibleFilter');
}

// Elementen in laten faden

var appearOptionsFade = {
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
    appearOptionsFade);

    faders.forEach(fader => { 
        appearOnScroll.observe(fader);
    })

// Elementen in laten sliden

var appearOptionsSlide = {
    treshold: 1,
    rootMargin: "0px 0px -100px 0px",
};

var slideOnScroll =  new IntersectionObserver
( function(
    entries,
    slideOnScroll    
){ 
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else {
            entry.target.classList.add('slide-appear');
            slideOnScroll.unobserve(entry.target);
        }
    });
},
appearOptionsSlide);

sliders.forEach(slider => {
    slideOnScroll.observe(slider);
})


    // Footer menu openen

    landenKnop.addEventListener("click", openMenu);

    function openMenu(){
        landenOverlay.classList.toggle
        ("visible");
    }
