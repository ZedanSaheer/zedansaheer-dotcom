import { gsap } from "gsap";

/* Init variables needed */
let id = 0;
let counter = document.getElementById("counter");
let loadTimeline = gsap.timeline();

loadTimeline.from('.percentage', {
    duration: 2,
    opacity: 0,
});

loadTimeline.from('.counter', {
    duration: 2,
    opacity: 0,
}, "<");

loadTimeline.to('.counter', {
    duration: 4,
    opacity: 0,
});

loadTimeline.to('.percentage', {
    duration: 4,
    opacity: 0,
}, "<");

gsap.to(".mt_text", {
    xPercent: 100,
    duration: 8,
    repeat: -1,
});
gsap.to(".mb_text", {
    xPercent: -100,
    duration: 8,
    repeat: -1,
});

loadTimeline.from(".top", {
    yPercent: -100,
    duration: 2.5, ease: "power4.out",
}, 2.5);

loadTimeline.from(".bottom", {
    yPercent: 100,
    duration: 2.5, ease: "power4.out",
}, 2.5);



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
        if (counter) counter.innerText = id.toString();
    }
};

/* Adding responsive changes for animation */

let smallDesktop = 1250;
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (windowWidth < smallDesktop) {
    loadTimeline.from(".first_text", {
        opacity: 0,
        duration:3,
    });

    loadTimeline.to(".first_text", {
        opacity: 0,
        duration:3,
    });

    loadTimeline.from(".second_text", {
        opacity: 0,
    });

    loadTimeline.to(".second_text", {
        opacity: 1,
    });
} else {
    loadTimeline.from(".first_text", {
        opacity: 0,
        y: 100,
    });

    loadTimeline.to(".first_text", {
        opacity: 1,
        x: -200,
    });

    loadTimeline.from(".second_text", {
        opacity: 0,
        y: 100,
    });

    loadTimeline.to(".second_text", {
        opacity: 1,
        x: 200,
    });
}

/* Showing the animation timeline on window load */
window.onload = () => {
    showCounterAnimation();
};