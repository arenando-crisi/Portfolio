gsap.registerPlugin(ScrollToPlugin);

//-------------------landing page------------------------

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

let scrolltodescom = gsap.to(window, {
  paused: true,
  duration: 2,
  scrollTo: "#pdescom",
});

document.querySelector("#gif1").onclick = () => scrolltodescom.restart();

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

//-------------------des com------------------------

let pivoexp = gsap
  .timeline({ paused: true })
  .to("#pivo", 0, { height: "70%" })
  .to("#pivoexpanded", 0, { opacity: 1 })
  .to("#pivomin", 0, { opacity: 0 })
  .to("#liw", 0, { height: "5%" })
  .to("#liwexpanded", 0, { opacity: 0 })
  .to("#liwmin", 0, { opacity: 1 })
  .to("#tarzan", 0, { height: "5%" })
  .to("#tarzanexpanded", 0, { opacity: 0 })
  .to("#tarzanmin", 0, { opacity: 1 })
  .to("#fronzoni", 0, { height: "5%" })
  .to("#fronzoniexpanded", 0, { opacity: 0 })
  .to("#fronzonimin", 0, { opacity: 1 })
  .to("#boccioni", 0, { height: "5%" })
  .to("#boccioniexpanded", 0, { opacity: 0 })
  .to("#boccionimin", 0, { opacity: 1 })
  .to("#lineo", 0, { height: "5%" })
  .to("#lineoexpanded", 0, { opacity: 0 })
  .to("#lineomin", 0, { opacity: 1 })
  .to("#mdb", 0, { height: "5%" })
  .to("#mdbexpanded", 0, { opacity: 0 })
  .to("#mdbmin", 0, { opacity: 1 });

document.querySelector("#pivo").onmouseover = () => pivoexp.restart();
document.querySelector("#pivo").onmouseleave = () => pivoexp.reverse(0);

let liwexp = gsap
  .timeline({ paused: true })
  .to("#pivo", 0, { height: "5%" })
  .to("#pivoexpanded", 0, { opacity: 0 })
  .to("#pivomin", 0, { opacity: 1 })
  .to("#liw", 0, { height: "70%" })
  .to("#liwexpanded", 0, { opacity: 1 })
  .to("#liwmin", 0, { opacity: 0 })
  .to("#tarzan", 0, { height: "5%" })
  .to("#tarzanexpanded", 0, { opacity: 0 })
  .to("#tarzanmin", 0, { opacity: 1 })
  .to("#fronzoni", 0, { height: "5%" })
  .to("#fronzoniexpanded", 0, { opacity: 0 })
  .to("#fronzonimin", 0, { opacity: 1 })
  .to("#boccioni", 0, { height: "5%" })
  .to("#boccioniexpanded", 0, { opacity: 0 })
  .to("#boccionimin", 0, { opacity: 1 })
  .to("#lineo", 0, { height: "5%" })
  .to("#lineoexpanded", 0, { opacity: 0 })
  .to("#lineomin", 0, { opacity: 1 })
  .to("#mdb", 0, { height: "5%" })
  .to("#mdbexpanded", 0, { opacity: 0 })
  .to("#mdbmin", 0, { opacity: 1 });

document.querySelector("#liw").onmouseover = () => liwexp.restart();
document.querySelector("#liw").onmouseleave = () => liwexp.reverse(0);

let tarzanexp = gsap
  .timeline({ paused: true })
  .to("#pivo", 0, { height: "5%" })
  .to("#pivoexpanded", 0, { opacity: 0 })
  .to("#pivomin", 0, { opacity: 1 })
  .to("#liw", 0, { height: "5%" })
  .to("#liwexpanded", 0, { opacity: 0 })
  .to("#liwmin", 0, { opacity: 1 })
  .to("#tarzan", 0, { height: "70%" })
  .to("#tarzanexpanded", 0, { opacity: 1 })
  .to("#tarzanmin", 0, { opacity: 0 })
  .to("#fronzoni", 0, { height: "5%" })
  .to("#fronzoniexpanded", 0, { opacity: 0 })
  .to("#fronzonimin", 0, { opacity: 1 })
  .to("#boccioni", 0, { height: "5%" })
  .to("#boccioniexpanded", 0, { opacity: 0 })
  .to("#boccionimin", 0, { opacity: 1 })
  .to("#lineo", 0, { height: "5%" })
  .to("#lineoexpanded", 0, { opacity: 0 })
  .to("#lineomin", 0, { opacity: 1 })
  .to("#mdb", 0, { height: "5%" })
  .to("#mdbexpanded", 0, { opacity: 0 })
  .to("#mdbmin", 0, { opacity: 1 });

document.querySelector("#tarzan").onmouseover = () => tarzanexp.restart();
document.querySelector("#tarzan").onmouseleave = () => tarzanexp.reverse(0);

let fronzoniexp = gsap
  .timeline({ paused: true })
  .to("#pivo", 0, { height: "5%" })
  .to("#pivoexpanded", 0, { opacity: 0 })
  .to("#pivomin", 0, { opacity: 1 })
  .to("#liw", 0, { height: "5%" })
  .to("#liwexpanded", 0, { opacity: 0 })
  .to("#liwmin", 0, { opacity: 1 })
  .to("#tarzan", 0, { height: "5%" })
  .to("#tarzanexpanded", 0, { opacity: 0 })
  .to("#tarzanmin", 0, { opacity: 1 })
  .to("#fronzoni", 0, { height: "70%" })
  .to("#fronzoniexpanded", 0, { opacity: 1 })
  .to("#fronzonimin", 0, { opacity: 0 })
  .to("#boccioni", 0, { height: "5%" })
  .to("#boccioniexpanded", 0, { opacity: 0 })
  .to("#boccionimin", 0, { opacity: 1 })
  .to("#lineo", 0, { height: "5%" })
  .to("#lineoexpanded", 0, { opacity: 0 })
  .to("#lineomin", 0, { opacity: 1 })
  .to("#mdb", 0, { height: "5%" })
  .to("#mdbexpanded", 0, { opacity: 0 })
  .to("#mdbmin", 0, { opacity: 1 });

document.querySelector("#fronzoni").onmouseover = () => fronzoniexp.restart();
document.querySelector("#fronzoni").onmouseleave = () => fronzoniexp.reverse(0);

let boccioniexp = gsap
  .timeline({ paused: true })
  .to("#pivo", 0, { height: "5%" })
  .to("#pivoexpanded", 0, { opacity: 0 })
  .to("#pivomin", 0, { opacity: 1 })
  .to("#liw", 0, { height: "5%" })
  .to("#liwexpanded", 0, { opacity: 0 })
  .to("#liwmin", 0, { opacity: 1 })
  .to("#tarzan", 0, { height: "5%" })
  .to("#tarzanexpanded", 0, { opacity: 0 })
  .to("#tarzanmin", 0, { opacity: 1 })
  .to("#fronzoni", 0, { height: "5%" })
  .to("#fronzoniexpanded", 0, { opacity: 0 })
  .to("#fronzonimin", 0, { opacity: 1 })
  .to("#boccioni", 0, { height: "70%" })
  .to("#boccioniexpanded", 0, { opacity: 1 })
  .to("#boccionimin", 0, { opacity: 0 })
  .to("#lineo", 0, { height: "5%" })
  .to("#lineoexpanded", 0, { opacity: 0 })
  .to("#lineomin", 0, { opacity: 1 })
  .to("#mdb", 0, { height: "5%" })
  .to("#mdbexpanded", 0, { opacity: 0 })
  .to("#mdbmin", 0, { opacity: 1 });

document.querySelector("#boccioni").onmouseover = () => boccioniexp.restart();
document.querySelector("#boccioni").onmouseleave = () => boccioniexp.reverse(0);

let lineoexp = gsap
  .timeline({ paused: true })
  .to("#pivo", 0, { height: "5%" })
  .to("#pivoexpanded", 0, { opacity: 0 })
  .to("#pivomin", 0, { opacity: 1 })
  .to("#liw", 0, { height: "5%" })
  .to("#liwexpanded", 0, { opacity: 0 })
  .to("#liwmin", 0, { opacity: 1 })
  .to("#tarzan", 0, { height: "5%" })
  .to("#tarzanexpanded", 0, { opacity: 0 })
  .to("#tarzanmin", 0, { opacity: 1 })
  .to("#fronzoni", 0, { height: "5%" })
  .to("#fronzoniexpanded", 0, { opacity: 0 })
  .to("#fronzonimin", 0, { opacity: 1 })
  .to("#boccioni", 0, { height: "5%" })
  .to("#boccioniexpanded", 0, { opacity: 0 })
  .to("#boccionimin", 0, { opacity: 1 })
  .to("#lineo", 0, { height: "70%" })
  .to("#lineoexpanded", 0, { opacity: 1 })
  .to("#lineomin", 0, { opacity: 0 })
  .to("#mdb", 0, { height: "5%" })
  .to("#mdbexpanded", 0, { opacity: 0 })
  .to("#mdbmin", 0, { opacity: 1 });

document.querySelector("#lineo").onmouseover = () => lineoexp.restart();
document.querySelector("#lineo").onmouseleave = () => lineoexp.reverse(0);

let mdbexp = gsap
  .timeline({ paused: true })
  .to("#pivo", 0, { height: "5%" })
  .to("#pivoexpanded", 0, { opacity: 0 })
  .to("#pivomin", 0, { opacity: 1 })
  .to("#liw", 0, { height: "5%" })
  .to("#liwexpanded", 0, { opacity: 0 })
  .to("#liwmin", 0, { opacity: 1 })
  .to("#tarzan", 0, { height: "5%" })
  .to("#tarzanexpanded", 0, { opacity: 0 })
  .to("#tarzanmin", 0, { opacity: 1 })
  .to("#fronzoni", 0, { height: "5%" })
  .to("#fronzoniexpanded", 0, { opacity: 0 })
  .to("#fronzonimin", 0, { opacity: 1 })
  .to("#boccioni", 0, { height: "5%" })
  .to("#boccioniexpanded", 0, { opacity: 0 })
  .to("#boccionimin", 0, { opacity: 1 })
  .to("#lineo", 0, { height: "5%" })
  .to("#lineoexpanded", 0, { opacity: 0 })
  .to("#lineomin", 0, { opacity: 1 })
  .to("#mdb", 0, { height: "70%" })
  .to("#mdbexpanded", 0, { opacity: 1 })
  .to("#mdbmin", 0, { opacity: 0 });

document.querySelector("#mdb").onmouseover = () => mdbexp.restart();
document.querySelector("#mdb").onmouseleave = () => mdbexp.reverse(0);
