//elimina la parte indesiderata del URL------------------------------------------------------------------------------------------------------------------
window.history.replaceState('', '', '/');

//scroll di apertura
document.addEventListener("DOMContentLoaded", () => {
    var element = document.getElementById("homepage");
    element.scrollIntoView({ block: "start" });
});

//barretta di indicazione dello scroll------------------------------------------------------------------------------------------------------------------
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//scroll dei tasti about e works------------------------------------------------------------------------------------------------------------------
function worksScroll() {
    var element = document.getElementById("ancoraworks");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function aboutScroll() {
    var element = document.getElementById("aboutanchor");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}

//animazione testo iniziale------------------------------------------------------------------------------------------------------------------
setTimeout(() => {
    const ourText = new SplitType('span#hometextanim1', { types: 'chars' })
    const chars = ourText.chars
    gsap.to(
        chars,
        {
            y: -0.06 * window.innerWidth,
            opacity: 1,
            stagger: 0.01,
            duration: 0.4,
            ease: 'power1.inOut',
        }
    )

    setTimeout(() => {
        const ourText = new SplitType('span#hometextanim2', { types: 'chars' })
        const chars = ourText.chars
        gsap.to(
            chars,
            {
                y: -0.06 * window.innerWidth,
                opacity: 1,
                stagger: 0.01,
                duration: 0.4,
                ease: 'power1.inOut',
            }
        )
    }, "200");

    setTimeout(() => {
        const ourText = new SplitType('span#hometextanim3', { types: 'chars' })
        const chars = ourText.chars
        gsap.to(
            chars,
            {
                y: -0.06 * window.innerWidth,
                opacity: 1,
                stagger: 0.01,
                duration: 0.4,
                ease: 'power1.inOut',
            }
        )

        gsap.to(
            "#gif",
            {
                opacity: 1,
                duration: 0.6,
                ease: 'power1.inOut',
            }
        )
    }, "400");
}, "300");

//animazione freccine------------------------------------------------------------------------------------------------------------------
gsap.to("#freccinascroll1", 2, {
    backgroundPosition: "100% 50%",
    ease: SteppedEase.config(30),
    repeat: -1,
});

gsap.to("#freccinascroll2", 2, {
    backgroundPosition: "100% 50%",
    ease: SteppedEase.config(30),
    repeat: -1,
});

//animazione cerchi on hover------------------------------------------------------------------------------------------------------------------
var cm1 = gsap.to("#cerchiomouse1", 0.3, {
    backgroundPosition: "100% 50%",
    ease: SteppedEase.config(32),
    paused: true,
});
document.querySelector("#cerchiomouse1").onmouseover = () => cm1.play();
document.querySelector("#cerchiomouse1").onmouseleave = () => cm1.reverse();

var cm2 = gsap.to("#cerchiomouse2", 0.3, {
    backgroundPosition: "100% 50%",
    ease: SteppedEase.config(32),
    paused: true,
});
document.querySelector("#cerchiomouse2").onmouseover = () => cm2.play();
document.querySelector("#cerchiomouse2").onmouseleave = () => cm2.reverse();

//animazione boccioni------------------------------------------------------------------------------------------------------------------
var prj1 = gsap.timeline({
    paused: true,
});

prj1.to("#boccioni", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextboccioni1 = new SplitType('div#txtboccioni1', { types: 'chars' })
const charsboccioni1 = ourTextboccioni1.chars
prj1.to(
    charsboccioni1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextboccioni2 = new SplitType('div#txtboccioni2', { types: 'chars' })
const charsboccioni2 = ourTextboccioni2.chars
prj1.to(
    charsboccioni2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#boccioni").onmouseover = () => prj1.play();
document.querySelector("#boccioni").onmouseleave = () => prj1.reverse();

//animazione fronzoni------------------------------------------------------------------------------------------------------------------
var prj2 = gsap.timeline({
    paused: true,
});

prj2.to("#fronzoni", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextfronzoni1 = new SplitType('div#txtfronzoni1', { types: 'chars' })
const charsfronzoni1 = ourTextfronzoni1.chars
prj2.to(
    charsfronzoni1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextfronzoni2 = new SplitType('div#txtfronzoni2', { types: 'chars' })
const charsfronzoni2 = ourTextfronzoni2.chars
prj2.to(
    charsfronzoni2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#fronzoni").onmouseover = () => prj2.play();
document.querySelector("#fronzoni").onmouseleave = () => prj2.reverse();

//animazione tarzan------------------------------------------------------------------------------------------------------------------
var prj3 = gsap.timeline({
    paused: true,
});

prj3.to("#tarzan", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTexttarzan1 = new SplitType('div#txttarzan1', { types: 'chars' })
const charstarzan1 = ourTexttarzan1.chars
prj3.to(
    charstarzan1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTexttarzan2 = new SplitType('div#txttarzan2', { types: 'chars' })
const charstarzan2 = ourTexttarzan2.chars
prj3.to(
    charstarzan2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#tarzan").onmouseover = () => prj3.play();
document.querySelector("#tarzan").onmouseleave = () => prj3.reverse();

//animazione mdb------------------------------------------------------------------------------------------------------------------
var prj4 = gsap.timeline({
    paused: true,
});

prj4.to("#mdb", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextmdb1 = new SplitType('div#txtmdb1', { types: 'chars' })
const charsmdb1 = ourTextmdb1.chars
prj4.to(
    charsmdb1,
    {
        y: -0.02 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextmdb2 = new SplitType('div#txtmdb2', { types: 'chars' })
const charsmdb2 = ourTextmdb2.chars
prj4.to(
    charsmdb2,
    {
        y: -0.02 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#mdb").onmouseover = () => prj4.play();
document.querySelector("#mdb").onmouseleave = () => prj4.reverse();

//animazione isonu------------------------------------------------------------------------------------------------------------------
var prj5 = gsap.timeline({
    paused: true,
});

prj5.to("#isonu", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextisonu1 = new SplitType('div#txtisonu1', { types: 'chars' })
const charsisonu1 = ourTextisonu1.chars
prj5.to(
    charsisonu1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextisonu2 = new SplitType('div#txtisonu2', { types: 'chars' })
const charsisonu2 = ourTextisonu2.chars
prj5.to(
    charsisonu2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#isonu").onmouseover = () => prj5.play();
document.querySelector("#isonu").onmouseleave = () => prj5.reverse();

//animazione lineo------------------------------------------------------------------------------------------------------------------
var prj6 = gsap.timeline({
    paused: true,
});

prj6.to("#lineo", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextlineo1 = new SplitType('div#txtlineo1', { types: 'chars' })
const charslineo1 = ourTextlineo1.chars
prj6.to(
    charslineo1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextlineo2 = new SplitType('div#txtlineo2', { types: 'chars' })
const charslineo2 = ourTextlineo2.chars
prj6.to(
    charslineo2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#lineo").onmouseover = () => prj6.play();
document.querySelector("#lineo").onmouseleave = () => prj6.reverse();

//animazione pivo------------------------------------------------------------------------------------------------------------------
var prj7 = gsap.timeline({
    paused: true,
});

prj7.to("#pivo", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextpivo1 = new SplitType('div#txtpivo1', { types: 'chars' })
const charspivo1 = ourTextpivo1.chars
prj7.to(
    charspivo1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextpivo2 = new SplitType('div#txtpivo2', { types: 'chars' })
const charspivo2 = ourTextpivo2.chars
prj7.to(
    charspivo2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#pivo").onmouseover = () => prj7.play();
document.querySelector("#pivo").onmouseleave = () => prj7.reverse();

//animazione liw------------------------------------------------------------------------------------------------------------------
var prj8 = gsap.timeline({
    paused: true,
});

prj8.to("#liw", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextliw1 = new SplitType('div#txtliw1', { types: 'chars' })
const charsliw1 = ourTextliw1.chars
prj8.to(
    charsliw1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextliw2 = new SplitType('div#txtliw2', { types: 'chars' })
const charsliw2 = ourTextliw2.chars
prj8.to(
    charsliw2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#liw").onmouseover = () => prj8.play();
document.querySelector("#liw").onmouseleave = () => prj8.reverse();

//animazione coding------------------------------------------------------------------------------------------------------------------
var prj9 = gsap.timeline({
    paused: true,
});

prj9.to("#coding", {
    scale: 1.05,
    duration: 0.25,
    ease: 'power1.inOut',
}, "<");

const ourTextcoding1 = new SplitType('div#txtcoding1', { types: 'chars' })
const charscoding1 = ourTextcoding1.chars
prj9.to(
    charscoding1,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

const ourTextcoding2 = new SplitType('div#txtcoding2', { types: 'chars' })
const charscoding2 = ourTextcoding2.chars
prj9.to(
    charscoding2,
    {
        y: -0.028 * window.innerWidth,
        opacity: 1,
        stagger: 0.003,
        duration: 0.25,
        ease: 'power1.inOut',
    }, "<"
);

document.querySelector("#coding").onmouseover = () => prj9.play();
document.querySelector("#coding").onmouseleave = () => prj9.reverse();

//animazione mouse------------------------------------------------------------------------------------------------------------------

const isTouchDevice = 'ontouchstart' in window;
const createCursorFollower = () => {
    const $el = document.querySelector('#pointer');
    // Each time the mouse coordinates are updated,
    // we need to pass the values to gsap in order
    // to animate the element
    window.addEventListener('mousemove', (e) => {
        const { x, y } = e;
        // GSAP config
        gsap.to($el, {
            ease: "back.out(1.3)",
            x: x,
            y: y,

        });
    });
    // Hidding the cursor element when the mouse cursor
    // is moved out of the page
    document.addEventListener('mouseleave', (e) => {
        gsap.to($el, {
            duration: 0.7,
            opacity: 0,
        });
    });

    document.addEventListener('mouseenter', (e) => {
        gsap.to($el, {
            duration: 0.7,
            opacity: 1,
        });
    });
};
// Only invoke the function if isn't a touch device
if (!isTouchDevice) {
    createCursorFollower();
}

function classHoverPrj() {
    var element = document.getElementById("pointer");
    element.classList.add("hoverprj");
    element.classList.remove("normal");

    var element = document.getElementById("txtprj");
    element.classList.remove("invisible");
}

function classLeavePrj() {
    var element = document.getElementById("pointer");
    element.classList.remove("hoverprj");
    element.classList.add("normal");

    var element = document.getElementById("txtprj");
    element.classList.add("invisible");
}

function classHoverContact() {
    console.log("brum")
    var element = document.getElementById("pointer");
    element.classList.add("hoverprj");
    element.classList.remove("normal");

    var element = document.getElementById("txtcontact");
    element.classList.remove("invisible");
}

function classLeaveContact() {
    var element = document.getElementById("pointer");
    element.classList.remove("hoverprj");
    element.classList.add("normal");

    var element = document.getElementById("txtcontact");
    element.classList.add("invisible");
}

//testo scorrevole------------------------------------------------------------------------------------------------------------------

gsap.to(".testochescorre", 60, {
    x: -4 * window.innerWidth,
    repeat: -1,
    ease: "none",
})