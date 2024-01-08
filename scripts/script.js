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

  /** =========================  */
  // IMAGE SLIDER SECTION
  // create an array that contains the images urls
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
    navigateSlider(1); // 1 means that the slider should move right, can decide to use a text or anything of choice ...
  });

  // add eventlistener to the left navigator
  leftNavigator.addEventListener("click", () => {
    navigateSlider(-1); // -1 means that the slider should move left, can decide to use a text or anything of choice ...
  });

  // using keyboard keys to change the images and textContent
  // add event listener to the document itself . . .
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      navigateSlider(1);
    } else if (event.key === "ArrowLeft") {
      navigateSlider(-1);
    }
  });

  const navigateSlider = (direction) => {
    if (direction === 1 && imageCount < lastArrayElement) {
      imageCount += 1;
    } else if (direction === -1 && imageCount > 0) {
      imageCount -= 1;
    } else if (direction === -1) {
      imageCount = lastArrayElement;
    } else {
      imageCount = 0;
    }
    bannerContainer.style.backgroundImage = `url("${imageArray[imageCount]}")`;
    updateArticleContent(imageCount);
  };

  // logic to change the content of the text when the navigators are clicked
  const articleHeader = document.querySelector(".article-1-header");
  articleParagraph = document.querySelector(".article-1-text");
  function updateArticleContent(element) {
    if (element == 0) {
      articleHeader.textContent = "Discover innovative ways to decorate";
      articleParagraph.textContent = ` We provide unmatched quality, comfort, and style for property owners
      across the country. Our experts combine form and function in bringing
      your vision to life. Create a room in your own style with our collection
      and make your property a reflection of you and what you love.`;
    }
    if (element == 1) {
      articleHeader.textContent = `We are available all across the globe`;
      articleParagraph.textContent = ` With stores all over the world, it's easy for you to find furniture for
      your home or place of business. Locally, we’re in most major cities
      throughout the country. Find the branch nearest you using our store
      locator. Any questions? Don't hesitate to contact us today.`;
    }

    if (element == 2) {
      articleHeader.textContent = `Manufactured with the best materials`;
      articleParagraph.textContent = ` Our multifunctional collection blends design and function to suit your
      individual taste. Make each room unique, or pick a cohesive theme that
      best express your interests and what inspires you. Find the furniture
      pieces you need, from traditional to contemporary styles or anything in
      between. Product specialists are available to help you create your dream
      space.`;
    }
  }
});
