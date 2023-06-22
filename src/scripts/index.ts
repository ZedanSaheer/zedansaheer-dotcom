import { gsap } from "gsap";

/* Init variables needed */
let id = 0;
let counter = document.getElementById("counter");
let loadTimeline = gsap.timeline();

loadTimeline.from('.percentage',{
 duration:1,
 opacity:0,
});

loadTimeline.from('.counter',{
 duration:2,
 opacity:0,
});


/**
 * Shows the counter animation for pre-loading screen by setting id 
 */
function showCounterAnimation() {
    id = setInterval(frame, 60);
    // The 60 controls the speed of the interval
};

/**
 * Controls the logic of the animation for pre-loading screen
 */
function frame() {
    if (id >= 50) {
        clearInterval(id);
        loadTimeline.play();
    } else {
        id++;
        if (counter!) counter.innerText = id.toString();
    }
};

window.onload = () => {
    showCounterAnimation();
};
