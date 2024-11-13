export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
export const eraseCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export const elementObserver = (callback, options) => {
  if (typeof options.element !== "undefined") {
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(options);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    ).observe(options.element);
  }
};

export const matchHeight = (selector) => {
  const objects = document.querySelectorAll(selector);
  const heights = Array.from(objects).map((x, i, a) => {
    return x.offsetHeight;
  });
  const max = Math.max(...heights);
  objects.forEach((el) => {
    el.style.height = `${max}px`;
  });
};

export const hideOnClickOutside = (element, callback, check) => {
  const outsideClickListener = (event) => {
    if (!element.contains(event.target) && check) {
      console.log("tried to close");
      callback();
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };
  document.addEventListener("click", outsideClickListener);
};

export const imgTosvg = (options) => {
  const img = options.element;
  const index = options.index;
  const imgURL = img.getAttribute("src");
  const imgID = img.getAttribute("id");
  const imgWidth = img.getAttribute("width");
  const imgHeight = img.getAttribute("height");
  const imgClasses = img.getAttribute("class");
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const resPure = this.responseText.trim();
      const parentDiv = document.createElement("div");
      parentDiv.innerHTML = resPure;
      const svg = parentDiv.querySelector("svg");
      if (svg != null) {
        if (imgID != null) {
          svg.setAttribute("id", imgID);
        } else {
          svg.setAttribute("id", `replaced-svg-${index}`);
        }
        svg.removeAttribute("xmlns:a");
        svg.setAttribute("class", imgClasses);
        // eslint-disable-next-line no-unused-expressions
        imgWidth !== null ? svg.setAttribute("width", imgWidth) : null;
        // eslint-disable-next-line no-unused-expressions
        imgHeight !== null ? svg.setAttribute("height", imgHeight) : null;
        img.parentNode.replaceChild(svg, img);
      }
    }
  };
  xhttp.open("GET", imgURL, true);
  xhttp.send();
};

export const magnify = (img, zoom) => {
  /* Create magnifier glass: */
  const glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";
  const bw = 3;
  const w = glass.offsetWidth / 2;
  const h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    const pos = getCursorPos(e);
    let x = pos.x;
    let y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /* Set the position of the magnifier glass: */
    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition =
      "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
  }

  function getCursorPos(e) {
    let x = 0;
    let y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    const a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x, y };
  }
};

/**
 * Get Viewport width and height
 */
export const getViewportSize = () => {
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight || docElem.clientHeight || body.clientHeight;

  return { width: x, height: y };
};
/**
 * Method used to encapsolate block JS.
 * This method mainly checks the wp editor if the block is loaded, and if so then it runs the block's JS callback provided.
 * The block has a failsafe `times` counter, so that if the block isn't loaded after checking for five times then the check will stop
 * @param {number} times - The number of times the function will try to check if the block is loaded
 * @param {*} func - The callback function to run in case the editor signals that the block is loaded. This function has to return a boolean for performance considerations.
 */
// export const wpEditorDone = (
//   times = 5,
//   func,
//   onlyAdmin = false,
//   onlyClient = false
// ) => {
//   if (
//     typeof wp !== "undefined" &&
//     typeof wp.data !== "undefined" &&
//     onlyClient === false
//   ) {
//     const { select, subscribe } = wp.data;

//     const closeListener = subscribe(() => {
//       const isReady = select("core/editor").__unstableIsEditorReady();
//       if (!isReady) {
//         return;
//       }
//       closeListener();
//       let counter = 0;
//       const ticker = setInterval(() => {
//         const result = func();
//         if (result === true || counter > times) {
//           clearInterval(ticker);
//         }
//         counter++;
//       }, 1000);
//     });
//   } else if (onlyAdmin === false) {
//     func();
//   }
// };
export const wpEditorDone = (
  times = 5,
  func,
  onlyAdmin = false,
  onlyClient = false
) => {
  return new Promise((resolve, reject) => {
    if (
      typeof wp !== "undefined" &&
      typeof wp.data !== "undefined" &&
      typeof wp.data.select("core/editor") !== "undefined" &&
      onlyClient === false
    ) {
      const { select, subscribe } = wp.data;

      const closeListener = subscribe(() => {
        const isReady = select("core/editor").__unstableIsEditorReady();
        if (!isReady) {
          return;
        }
        closeListener();
        let counter = 0;
        const ticker = setInterval(() => {
          const result = func();
          if (result === true || counter > times) {
            clearInterval(ticker);
            resolve(true);
          }
          counter++;
        }, 2000);
      });
    } else if (onlyAdmin === false) {
      func();
      resolve(true);
    }
  });
};

export const destroyOldSlider = (section) => {
  if (
    document.sliderList &&
    document.sliderList.find((el) => el.id === section.id)
  ) {
    document.sliderList.find((el) => el.id === section.id).el.destroy();
  }
};

export const addSliderToGlobalList = (section, slider) => {
  if (!document.sliderList) {
    document.sliderList = [];
  } else if (document.sliderList.find((el) => el.id === section.id)) {
    document.sliderList = document.sliderList.filter(
      (el) => el.id !== section.id
    );
  }
  document.sliderList = document.sliderList.concat({
    id: section.id,
    el: slider,
  });
};

export const addRule = ((style) => {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    var propText =
      typeof css === "string"
        ? css
        : Object.keys(css)
            .map(function (p) {
              return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
            })
            .join(";");
    sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
  };
})(document.createElement("style"));

export const getLineHeight = (el) => {
  var temp = document.createElement(el.nodeName),
    ret;
  temp.setAttribute(
    "style",
    "margin:0; padding:0; " +
      "font-family:" +
      (el.style.fontFamily || "inherit") +
      "; " +
      "font-size:" +
      (el.style.fontSize || "inherit")
  );
  temp.innerHTML = "A";

  el.parentNode.appendChild(temp);
  ret = temp.clientHeight;
  temp.parentNode.removeChild(temp);

  return ret;
};

/**
 * This function takes two objects as input and returns true if they are deeply equal, and false otherwise.
 * It works for both arrays and objects, and can handle nested objects as well.
 * @param {*} obj1 - An object to compare
 * @param {*} obj2 - Another object to compare with the first one
 * @returns Whether both objects are identical
 */
export const deepCompare = (obj1, obj2) => {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  if (typeof obj1 === "object") {
    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      for (let i = 0; i < obj1.length; i++) {
        if (!deepCompare(obj1[i], obj2[i])) {
          return false;
        }
      }
      return true;
    } else {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }
      for (let key in obj1) {
        if (!(key in obj2) || !deepCompare(obj1[key], obj2[key])) {
          return false;
        }
      }
      return true;
    }
  } else {
    return obj1 === obj2;
  }
};

/**
 * A function used to create a new div and append it to the DOM or remove it if it already exists.
 * @param {string} targetId - an identifier passed to `getElementById` to check if the div already exists in the dom
 * @param {HTMLElement} contentElement - the new div's content to be appended to it
 * @param {{class: string}} options - the new div's content to be appended to it
 */
export const manageElement = (targetId, contentElement, options = {}) => {
  const existingDiv = document.getElementById(targetId);

  if (existingDiv) {
    existingDiv.classList.add("hide");
    setTimeout(() => {
      existingDiv.remove();
    }, 500);
  } else {
    const newDiv = document.createElement("div");
    newDiv.id = targetId;
    if (options.class) {
      newDiv.classList.add(options.class);
    }

    newDiv.appendChild(contentElement);
    document.body.appendChild(newDiv);
  }
};

/**
 * Function that watches an element's DOM for changes and runs the callback on detecting a change.
 * @param {HTMLElement} obj - An object to watch for changes
 * @param {Function} callback - A callback function to run on change detection.
 */
export const observeDOM = (() => {
  const MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver;

  return (obj, callback) => {
    if (!obj || obj.nodeType !== 1) return;

    if (MutationObserver) {
      // Create a new observer
      const mutationObserver = new MutationObserver(callback);
      // Observe changes in children (including subtree)
      mutationObserver.observe(obj, { childList: true, subtree: true });
      return mutationObserver;
    } else if (window.addEventListener) {
      // Fallback for older browsers
      obj.addEventListener("DOMNodeInserted", callback, false);
      obj.addEventListener("DOMNodeRemoved", callback, false);
    }
  };
})();

/**
 * Finds elements matching the given CSS selector and applies a callback function to each.
 *
 * @param {string} target - The CSS selector to target elements.
 * @param {function} callback - The callback function to be executed for each matched element.
 *   The callback function receives the matched element as its argument.
 *
 * @example
 * ```javascript
 * findAndDoForEach('.my-button', (button) => {
 *   button.addEventListener('click', () => {
 *     console.log('Button clicked!');
 *   });
 * });
 * ```
 */
export const findAndDoForEach = (target, callback) => {
  const targets = document.querySelectorAll(target);

  if (targets && targets.length > 0) {
    targets.forEach((one) => {
      callback(one);
    });
  }
};
