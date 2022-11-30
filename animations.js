let gif1exp = gsap
  .timeline({ paused: true })
  .to("#nome", 0, { y: -90 })
  .to("#insta", 0, { y: -90 })
  .to("#about", 0, { y: -90 })
  .to("#git", 0, { y: -90 })
  .to("#gif2", 0, { y: 90 })
  .to("#info2", 0, { y: 90 })
  .to("#gif3", 0, { y: 90 })
  .to("#info3", 0, { y: 90 });

document.querySelector("#gif1").onmouseover = () => gif1exp.restart();
document.querySelector("#gif1").onmouseleave = () => gif1exp.reverse(0);

let gif2exp = gsap
  .timeline({ paused: true })
  .to("#nome", 0, { y: -90 })
  .to("#insta", 0, { y: -90 })
  .to("#about", 0, { y: -90 })
  .to("#git", 0, { y: -90 })
  .to("#gif1", 0, { y: -90 })
  .to("#info1", 0, { y: -90 })
  .to("#gif3", 0, { y: 90 })
  .to("#info3", 0, { y: 90 });

document.querySelector("#gif2").onmouseover = () => gif2exp.restart();
document.querySelector("#gif2").onmouseleave = () => gif2exp.reverse(0);

let gif3exp = gsap
  .timeline({ paused: true })
  .to("#nome", 0, { y: -90 })
  .to("#insta", 0, { y: -90 })
  .to("#about", 0, { y: -90 })
  .to("#git", 0, { y: -90 })
  .to("#gif1", 0, { y: -90 })
  .to("#info1", 0, { y: -90 })
  .to("#gif2", 0, { y: -90 })
  .to("#info2", 0, { y: -90 });

document.querySelector("#gif3").onmouseover = () => gif3exp.restart();
document.querySelector("#gif3").onmouseleave = () => gif3exp.reverse(0);
