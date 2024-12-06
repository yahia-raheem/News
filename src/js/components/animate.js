import { elementObserver, findAndDoForEach } from "./helper-funcs.js";
document.addEventListener("DOMContentLoaded", () => {
  findAndDoForEach(".animate.fade-in", _fadeIn);
  findAndDoForEach(".animate.scale", _scaleWithScroll);
  findAndDoForEach(".animate.typewriter", _typeWriterWrapper);
});

/**
 * function to fade in object as soon as it enters the view port
 * @param {HTMLBaseElement} el An element that you want to fade in
 */
const _fadeIn = (el) => {
  elementObserver(
    (options) => {
      const hasDelay = options.element.getAttribute("data-delay");
      const forceDelay = options.element.getAttribute("data-force-delay");
      if (hasDelay && (window.innerWidth >= 992 || forceDelay) ) {
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

const _typeWriterWrapper = (el) => {
  elementObserver(
    (options) => {
      _typeWriterInner(options.element)
    },
    { element: el }
  );
}

/**
 * A function that scales images on zoom.
 * The image scales up on scroll down to a maximum of 2.5 zoom and it scales down on scroll up to the min which is 1
 * @param {HTMLBaseElement} el An element you want to scale on scroll
 */
const _typeWriterInner = (el) => {
  const speed = el.getAttribute("data-speed") ?? 50;
  const delay = el.getAttribute("data-delay");
  const txt = el.getAttribute("data-content");

  if (!txt) {
    return;
  }

  let i = 0;

  const typewriter = () => {
    if (i < txt.length) {
      el.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typewriter, speed);
    }
  };

  if (delay) {
    setTimeout(() => {
      typewriter();
    }, +delay);
  } else {
    typewriter();
  }
};
