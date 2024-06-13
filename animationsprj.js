//elimina la parte indesiderata del URL------------------------------------------------------------------------------------------------------------------
window.history.replaceState('', '', '/');

//barretta di indicazione dello scroll------------------------------------------------------------------------------------------------------------------
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
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

//animazione cerchi on hover------------------------------------------------------------------------------------------------------------------
var cm1 = gsap.to("#cerchiomouse1", 0.3, {
    backgroundPosition: "100% 50%",
    ease: SteppedEase.config(32),
    paused: true,
});
document.querySelector("#cerchiomouse1").onmouseover = () => cm1.play();
document.querySelector("#cerchiomouse1").onmouseleave = () => cm1.reverse();

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
            ease: "back.out(1.5)",
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

//testo scorrevole------------------------------------------------------------------------------------------------------------------

gsap.to(".testochescorre", 60, {
    x: -4 * window.innerWidth,
    repeat: -1,
    ease: "none",
})