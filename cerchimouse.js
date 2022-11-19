gsap.registerPlugin(ScrollTrigger);

var cm1 = gsap.to("#cerchiomouse1", 0.3, {
  backgroundPosition: "100% 50%",
  ease: SteppedEase.config(32),
  paused: true,
});
document.querySelector("#cerchiomouse1").onmouseover = () => cm1.play();
document.querySelector("#cerchiomouse1").onmouseleave = () => cm1.reverse();
