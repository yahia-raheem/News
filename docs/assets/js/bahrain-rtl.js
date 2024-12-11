(()=>{"use strict";var e,t=function(e,t){if(void 0!==t.element)return new IntersectionObserver((function(n,a){n.forEach((function(n){n.isIntersecting&&(e(t),a.unobserve(n.target))}))}),{threshold:.5}).observe(t.element)},n=(e=document.createElement("style"),document.head.appendChild(e).sheet,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.getElementById(e);if(a)a.classList.add("hide"),setTimeout((function(){a.remove()}),500);else{var i=document.createElement("div");i.id=e,n.class&&i.classList.add(n.class),i.appendChild(t),document.body.appendChild(i)}}),a=(window.MutationObserver||window.WebKitMutationObserver,function(e,t){var n=document.querySelectorAll(e);n&&n.length>0&&n.forEach((function(e){t(e)}))});document.addEventListener("DOMContentLoaded",(function(){a(".animate.fade-in",i),a(".animate.scale",o),a(".animate.typewriter",d)}));var i=function(e){t((function(e){var t=e.element.getAttribute("data-delay"),n=e.element.getAttribute("data-force-delay");t&&(window.innerWidth>=992||n)?setTimeout((function(){e.element.classList.add("visible")}),+t):e.element.classList.add("visible")}),{element:e})},o=function(e){window.addEventListener("scroll",(function(){var t=window.scrollY,n=Math.max(1,Math.min(1+t/1e3,2.5));console.log(n),e.style.transform="scale(".concat(n,")")}))},d=function(e){t((function(e){c(e.element)}),{element:e})},c=function(e){var t,n=null!==(t=e.getAttribute("data-speed"))&&void 0!==t?t:50,a=e.getAttribute("data-delay"),i=e.getAttribute("data-content");if(i){var o=0,d=function t(){o<i.length&&(e.innerHTML+=i.charAt(o),o++,setTimeout(t,n))};a?setTimeout((function(){d()}),+a):d()}};document.addEventListener("DOMContentLoaded",(function(){document.openPopup=r}));var r=function(e){var t=e.currentTarget.querySelector("img.popup-target, video.popup-target, iframe.popup-target");if(t){var a=t.cloneNode(!0),i=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),c=document.createElement("button");i.classList.add("content"),d.classList.add("vail"),c.classList.add("close"),o.classList.add("img-wrapper"),i.appendChild(d),o.appendChild(a),o.appendChild(c),i.append(o),d.addEventListener("click",(function(){n("media-popup",i,{class:"media-popup"})})),c.addEventListener("click",(function(){n("media-popup",i,{class:"media-popup"})})),n("media-popup",i,{class:"media-popup"})}};document.addEventListener("DOMContentLoaded",(function(){a("[data-tabs]",s)}));var s=function(e){l(e);var t=e.querySelectorAll("button");u(t[0],e),t.forEach((function(t){t.addEventListener("click",(function(){u(t,e)}))}))},l=function(e){e.querySelectorAll("div[data-target]").forEach((function(e){e.classList.add("d-none")})),e.querySelectorAll("button[data-target]").forEach((function(e){e.classList.remove("selected")}))},u=function(e,t){l(t);var n=e.getAttribute("data-target");t.querySelector('div[data-target="'.concat(n,'"]')).classList.remove("d-none"),e.classList.add("selected")};window.addEventListener("load",(function(){var e=document.querySelector(".loader-container");e.classList.remove("active"),setTimeout((function(){e.style.display="none"}),500)})),window.addEventListener("beforeunload",(function(e){var t=document.querySelector(".loader-container");t.style.display="flex",setTimeout((function(){t.classList.add("active")}),0)})),document.addEventListener("DOMContentLoaded",(function(){}))})();