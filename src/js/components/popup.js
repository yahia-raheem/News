import { manageElement } from "./helper-funcs.js";

document.addEventListener("DOMContentLoaded", () => {
    document.openPopup = openPopup;
});
/**
 * Opens the sizeguide modal on click
 * @param {PointerEvent} ev - The pointer event on the target DIV
 */
const openPopup = (ev) => {
    const img = ev.currentTarget.querySelector('img.popup-target, video.popup-target');

    if (img) {
        const newImage = img.cloneNode(true)
        const content = document.createElement("div")
        const imgWrapper = document.createElement("div")
        const vail = document.createElement("div")
        const close = document.createElement("button")

        content.classList.add('content')
        vail.classList.add('vail')
        close.classList.add('close')
        imgWrapper.classList.add('img-wrapper')
        content.appendChild(vail)
        imgWrapper.appendChild(newImage)
        imgWrapper.appendChild(close)
        content.append(imgWrapper)

        vail.addEventListener('click', () => {
            manageElement("media-popup", content, {class: 'media-popup'});
        })

        close.addEventListener('click', () => {
            manageElement("media-popup", content, {class: 'media-popup'});
        })

        manageElement("media-popup", content, {class: 'media-popup'});
    }
}