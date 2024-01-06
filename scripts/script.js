document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  // const bannerHeader = document.querySelector(".banner-header");
  const nav = document.querySelector(".nav");
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
      menuIcon.innerHTML =
        '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#fff" fill-rule="evenodd" opacity="1"/></svg>';
    } else {
      menuIcon.innerHTML =
        '<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>';
    }
  });

  // add eventlisteners to each of the list-items and then add the active state...
  const listItems = document.querySelectorAll(".nav__list-item");
  listItems[0].classList.add("active");
  // loop through the listItems
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      listItems.forEach((item) => item.classList.remove("active"));
      item.classList.toggle("active");
    });
  });

  // still working on this section

  /** =========================  */
  // create an array that contains the images
  const imageArray = [
    "../images/desktop-image-hero-1.jpg",
    "../images/desktop-image-hero-2.jpg",
    "../images/desktop-image-hero-3.jpg",
  ];
  //add event listeners to the navigators
  const bannerContainer = document.querySelector(".banner-container");
  const rightNavigator = document.querySelector(".right-navigator");
  const leftNavigator = document.querySelector(".left-navigator");

  let imageCount = 0;
  let lastArrayElement = imageArray.length - 1;

  // add eventlistener to the right navigator
  rightNavigator.addEventListener("click", () => {
    if (imageCount < lastArrayElement) {
      imageCount += 1;
    } else {
      imageCount = 0;
    }
    bannerContainer.style.backgroundImage = `url("${imageArray[imageCount]}")`;
    console.log(imageCount);
  });

  // add eventlistener to the left navigator
  leftNavigator.addEventListener("click", () => {
    if (imageCount > 0) {
      imageCount = imageCount - 1;
    } else {
      imageCount = lastArrayElement;
    }
    bannerContainer.style.backgroundImage = `url("${imageArray[imageCount]}")`;
    console.log(imageCount);
  });
  // logic to change the content of the text when the navigators are clicked
});
