let isOpen = false;
const sideBar = document.getElementById("mySidenav");
document.addEventListener("DOMContentLoaded", () => {
  if (sideBar !== null) {
    const togglebtn = document.querySelector(".navbar-toggler");
    const sidemenuItems = document.querySelectorAll(".mobile-menu .menu-item");

    sidemenuItems.forEach((item) => {
      if (item.classList.contains("menu-item-has-children")) {
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          const submenu = item.querySelector(".sub-menu");
          if (submenu.classList.contains("opened")) {
            item.classList.remove("child-menu-opened");
            submenu.classList.remove("opened");
            submenu.style.maxHeight = 0;
          } else {
            item.classList.add("child-menu-opened");
            submenu.classList.add("opened");
            submenu.style.maxHeight = `inherit`;
          }
        });
      }
    });

    togglebtn.addEventListener("click", () => {
      if (isOpen !== true) {
        openNav();
        setTimeout(() => {
          isOpen = true;
        }, 1000);
      } else {
        closeNav();
      }
      document.addEventListener("click", outsideClickListener);
    });
  }
});

const openNav = () => {
  sideBar.style.width = "80vw";
  sideBar.style.opacity = 1;
  hideBodyScroll();
};

const closeNav = () => {
  sideBar.style.width = "0";
  sideBar.style.opacity = 0;
  isOpen = false;
  removeClickListener();
  retrieveBodyScroll();
};

const hideBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

const retrieveBodyScroll = () => {
  document.body.style.overflow = "auto";
};
const outsideClickListener = (event) => {
  if (!sideBar.contains(event.target) && isOpen) {
    closeNav();
  }
};

const removeClickListener = () => {
  document.removeEventListener("click", outsideClickListener);
};
