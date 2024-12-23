import "./components/animate.js";
// import "./components/popup.js";
import "./components/loader.js";
import "./components/tabs.js";

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map-container");
  const pinsContainer = document.getElementById("pins-container");
  const map = document.getElementById("map");

  const pinsData = JSON.parse(mapContainer.getAttribute("data-pins"));

  pinsData.forEach((pin) => {
    const pinElement = document.createElement("i");
    pinElement.classList.add("icon-pin");
    pinElement.style.position = "absolute";
    pinElement.style.insetInlineStart = `${pin.x}%`;
    pinElement.style.top = `${pin.y}%`;

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = pin.text;

    pinElement.appendChild(popup);
    pinsContainer.appendChild(pinElement);
  });
});
