const scrollContainer = document.querySelector(".scroll-container");
const display = document.querySelector(".display");

const container = document.querySelector(".scroll-elemente");
const clone = container.cloneNode(true);
const parent = container.parentElement;
parent.appendChild(clone);
parent.scrollTo(0, 2);

scrollContainer.addEventListener("scroll", (e) => {
  if (scrollContainer.scrollTop > scrollContainer.scrollHeight / 2) {
    display.style.top =
      ((scrollContainer.scrollTop - scrollContainer.scrollHeight / 2) /
        scrollContainer.scrollHeight) *
        2 *
        100 +
      "%";
    //KREIS

    document.querySelector(".kreis").style.offsetDistance = display.style.top;
  } else {
    display.style.top =
      (scrollContainer.scrollTop / scrollContainer.scrollHeight) * 2 * 100 +
      "%";
    //KREIS

    document.querySelector(".kreis").style.offsetDistance = display.style.top;
  }

  if (
    scrollContainer.offsetHeight + scrollContainer.scrollTop + 1 >=
    scrollContainer.scrollHeight
  ) {
    const container = document.querySelector(".scroll-elemente");
    const clone = container.cloneNode(true);
    const parent = container.parentElement;
    parent.appendChild(clone);
    parent.firstElementChild.remove();
    display.style.top = "0%";
  }

  if (scrollContainer.scrollTop == 0) {
    const container = document.querySelector(".scroll-elemente");
    const clone = container.cloneNode(true);
    const parent = container.parentElement;
    parent.insertBefore(clone, parent.firstChild);
    parent.scrollTo(0, container.scrollHeight);
    parent.lastElementChild.remove();
    display.style.top = "100%";
  }
});
