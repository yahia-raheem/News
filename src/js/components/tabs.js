import { findAndDoForEach } from "./helper-funcs.js";

document.addEventListener("DOMContentLoaded", () => {
  findAndDoForEach("[data-tabs]", tabs);
});
/**
 * does the tab functionality
 * @param {HTMLBaseElement} tabsContainer the container of a tabular structure
 */
const tabs = (tabsContainer) => {
  // first hide all
  hideAll(tabsContainer);

  // get all buttons
  const buttons = tabsContainer.querySelectorAll("button");

  // then show the first tab
  selectTab(buttons[0], tabsContainer);
  
  // then display selectively
  buttons.forEach((button) => {
    // add event listener for clicking on the button
    button.addEventListener("click", () => {
      // select the tab and show it's content
      selectTab(button, tabsContainer);
    });
  });
};

/**
 * hides all tabs
 * @param {HTMLBaseElement} tabs the tabs container
 */
const hideAll = (tabs) => {
  tabs.querySelectorAll("div[data-target]").forEach((el) => {
    el.classList.add("d-none");
  });
  tabs.querySelectorAll("button[data-target]").forEach((button) => {
    button.classList.remove("selected");
  });
};

/**
 * selects a tab
 * @param {HTMLBaseElement} button the button of the tab
 * @param {HTMLBaseElement} tabsContainer the tabs container
 */
const selectTab = (button, tabsContainer) => {
  // first hide all tabs
  hideAll(tabsContainer);

  // then find the tab you need
  const target = button.getAttribute("data-target");
  const targetDiv = tabsContainer.querySelector(`div[data-target="${target}"]`);

  // show the tab
  targetDiv.classList.remove("d-none");
  button.classList.add("selected");
};
