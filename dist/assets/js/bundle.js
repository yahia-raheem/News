(()=>{"use strict";e=document.createElement("style"),document.head.appendChild(e).sheet;var e,t=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.getElementById(e);if(a)a.classList.add("hide"),setTimeout((function(){a.remove()}),500);else{var d=document.createElement("div");d.id=e,n.class&&d.classList.add(n.class),d.appendChild(t),document.body.appendChild(d)}},n=(window.MutationObserver||window.WebKitMutationObserver,function(e,t){var n=document.querySelectorAll(e);n&&n.length>0&&n.forEach((function(e){t(e)}))});document.addEventListener("DOMContentLoaded",(function(){n(".animate.fade-in",a),n(".animate.scale",d)}));var a=function(e){var t;void 0!==(t={element:e}).element&&new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(function(e){var t=e.element.getAttribute("data-delay");t?setTimeout((function(){e.element.classList.add("visible")}),+t):e.element.classList.add("visible")}(t),n.unobserve(e.target))}))}),{threshold:.5}).observe(t.element)},d=function(e){window.addEventListener("scroll",(function(){var t=window.scrollY,n=Math.max(1,Math.min(1+t/1e3,2.5));console.log(n),e.style.transform="scale(".concat(n,")")}))};document.addEventListener("DOMContentLoaded",(function(){document.openPopup=o}));var o=function(e){var n=e.currentTarget.querySelector("img.popup-target, video.popup-target, iframe.popup-target");if(n){var a=n.cloneNode(!0),d=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("button");d.classList.add("content"),i.classList.add("vail"),c.classList.add("close"),o.classList.add("img-wrapper"),d.appendChild(i),o.appendChild(a),o.appendChild(c),d.append(o),i.addEventListener("click",(function(){t("media-popup",d,{class:"media-popup"})})),c.addEventListener("click",(function(){t("media-popup",d,{class:"media-popup"})})),t("media-popup",d,{class:"media-popup"})}};document.addEventListener("DOMContentLoaded",(function(){n("[data-tabs]",i)}));var i=function(e){c(e);var t=e.querySelectorAll("button");s(t[0],e),t.forEach((function(t){t.addEventListener("click",(function(){s(t,e)}))}))},c=function(e){e.querySelectorAll("div[data-target]").forEach((function(e){e.classList.add("d-none")})),e.querySelectorAll("button[data-target]").forEach((function(e){e.classList.remove("selected")}))},s=function(e,t){c(t);var n=e.getAttribute("data-target");t.querySelector('div[data-target="'.concat(n,'"]')).classList.remove("d-none"),e.classList.add("selected")};document.addEventListener("DOMContentLoaded",(function(){}))})();