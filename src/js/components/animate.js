import { elementObserver, findAndDoForEach } from "./helper-funcs.js";
document.addEventListener("DOMContentLoaded", () => {
  findAndDoForEach(".animate.fade-in", _fadeIn);
  findAndDoForEach(".animate.scale", _scaleWithScroll);
});

/**
 * function to fade in object as soon as it enters the view port
 * @param {HTMLBaseElement} el An element that you want to fade in
 */
const _fadeIn = (el) => {
  elementObserver(
    (options) => {
      const hasDelay = options.element.getAttribute("data-delay");
      if (hasDelay) {
        setTimeout(() => {
          options.element.classList.add("visible");
        }, +hasDelay);
      } else {
        options.element.classList.add("visible");
      }
    },
    { element: el }
  );
};

/**
 * A function that scales images on zoom.
 * The image scales up on scroll down to a maximum of 2.5 zoom and it scales down on scroll up to the min which is 1
 * @param {HTMLBaseElement} el An element you want to scale on scroll
 */
const _scaleWithScroll = (el) => {
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    let imageScale = Math.max(1, Math.min(1 + scrollPosition / 1000, 2.5));
    console.log(imageScale);

    el.style.transform = `scale(${imageScale})`;
  });
};
