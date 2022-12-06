gsap.registerPlugin(ScrollTrigger);

let tdescom = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#tdescom",
      start: "top center",
      end: "bottom center",
      //markers: "true",
      toggleActions: "play none reverse none",
    },
  })
  .to("#gif1", 0, {
    opacity: 0,
  })
  .to("#gif2", 0, {
    opacity: 0,
  })
  .to("#gif3", 0, {
    opacity: 0,
  })
  .to("#info2", 0, {
    opacity: 0,
  })
  .to("#info3", 0, {
    opacity: 0,
  })
  .to("#nome", 0, {
    opacity: 0,
  })
  .to("#about", 0, {
    opacity: 0,
  })
  .to("#insta", 0, {
    opacity: 0,
  })
  .to("#git", 0, {
    opacity: 0,
  })
  .to("#gif1", 0.1, {
    display: "none",
  })
  .to("#gif2", 0.1, {
    display: "none",
  })
  .to("#gif3", 0.1, {
    display: "none",
  })
  .to("#info2", 0.1, {
    display: "none",
  })
  .to("#info3", 0.1, {
    display: "none",
  })
  .to("#nome", 0.1, {
    display: "none",
  })
  .to("#about", 0.1, {
    display: "none",
  })
  .to("#insta", 0.1, {
    display: "none",
  })
  .to("#git", 0.1, {
    display: "none",
  })
  .to("#containerdescom", 0.1, {
    display: "block",
  })
  .to("#containerdescom", 0.2, {
    opacity: 1,
  });
