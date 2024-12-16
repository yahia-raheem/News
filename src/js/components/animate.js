import { elementObserver, findAndDoForEach } from "./helper-funcs.js";
document.addEventListener("DOMContentLoaded", () => {
  findAndDoForEach(".animate.fade-in", _fadeIn);
  findAndDoForEach(".animate.scale", _scaleWithScroll);
  findAndDoForEach(".animate.typewriter", _typeWriterWrapper);
  findAndDoForEach(".animate.counter", _counter);
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
      if (hasDelay && (window.innerWidth >= 992 || forceDelay)) {
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
      _typeWriterInner(options.element);
    },
    { element: el }
  );
};

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

/**
 * Counts up from 0 to a target number
 * @param {HTMLBaseElement} el
 */
const _counter = (el) => {
  elementObserver(
    (options) => {
      const speed = options.element.dataset.speed ?? 1;
      const countTo = parseFloat(options.element.dataset.countTo.replace(/,/g, ''));
      const step = parseInt(options.element.dataset.step) ?? 100;
      let count = 0;
      if (countTo) {
        const intervalId = setInterval(() => {
          options.element.textContent = count.toLocaleString('en-US');
          count = count + step;
  
          if (count > countTo) {
            options.element.textContent = countTo.toLocaleString('en-US');
            clearInterval(intervalId);
          }
        }, speed);
      }
    },
    { element: el }
  );
};
