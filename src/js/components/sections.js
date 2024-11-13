import { elementObserver } from "./helper-funcs.js";
document.addEventListener("DOMContentLoaded", () => {
  const fadeinSections = document.querySelectorAll("section.fade-in");

  if (fadeinSections && fadeinSections.length > 0) {
    fadeinSections.forEach((sec) => {
      elementObserver(
        (options) => {
          options.element.classList.add("visible");
        },
        { element: sec }
      );
    });
  }
});
