window.addEventListener("load", () => {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.classList.remove('active')
  setTimeout(() => {
      loaderContainer.style.display = "none";
  }, 500);
});
window.addEventListener("beforeunload", (event) => {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.style.display = "flex";
  setTimeout(() => {
    loaderContainer.classList.add('active')
  }, 0);
});
