const formInputs = document.querySelectorAll(".input-container_input");
const nameIcon = document.querySelector(".name-icon");
const phoneIcon = document.querySelector(".phone-icon");

function changeImage(img, newSrc) {
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = newSrc;
    img.style.opacity = "1";
  }, 200);
}

formInputs[0].addEventListener("focus", () => {
  changeImage(nameIcon, "assets/images/name-active.png");
});
formInputs[0].addEventListener("blur", () => {
  changeImage(nameIcon, "assets/images/name-unactive.png");
});

formInputs[1].addEventListener("focus", () => {
  changeImage(phoneIcon, "assets/images/phone-active.png");
});
formInputs[1].addEventListener("blur", () => {
  changeImage(phoneIcon, "assets/images/phone-unactive.png");
});
