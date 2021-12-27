document.addEventListener("DOMContentLoaded", () => {
  const mainBg = document.querySelector(".page");
  document.addEventListener("scroll", (evt) => {
    let scroll =
      evt.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop);
    mainBg.style.backgroundPosition = `center ${scroll / 2}px`;
    
	
  });
});

const settings = {
  text: "War For Love!",
  value: 100,
};
const field = document.querySelector(".intro__title");
function writing(text) {
  field.textContent = "";
  let massText = text.split("");
  let index = 0;

  let int = setInterval(() => {
    if (index == massText.length - 1) {
      clearInterval(int);
    }
    field.textContent += massText[index];
    index++;
  }, settings.value);
}

writing(settings.text);

const images = document.querySelectorAll(".about-us__image");
images.forEach((item) =>
  item.addEventListener("click", () => {
    images.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  })
);

const track = document.querySelectorAll(".tracks__item");
track.forEach((item) =>
  item.addEventListener("click", () => {
    track.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  })
);

$(".slider__list").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: true,
  swipe: false,
  slidesToScroll: 1,
  autoplay: true,
  variableWidth: true,
  nextArrow: $(".slider__next"),
  prevArrow: $(".slider__prev"),
  responsive: [
    {
      breakpoint: 1175,
      settings: {
        variableWidth: false,
        swipe: true,

        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        variableWidth: false,
        swipe: true,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const line = document.querySelector(".line");

  document.addEventListener("scroll", (evt) => {
    let scroll =
      evt.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop);
    if (scroll > 10) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
    line.style.width =
      (scroll * 100) / document.body.clientHeight + 17.5304 + "%";
  });
  82.4696;
});

/* open navigation */
const headerMobile = document.querySelector(".header__mobile");
const navClose = document.querySelector(".nav__close");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
function toggleActive() {
  nav.classList.toggle("active");
  document.body.classList.toggle("active");
}
headerMobile.addEventListener("click", toggleActive);
navClose.addEventListener("click", toggleActive);
if (document.body.clientWidth < 1023) {
  navList.addEventListener("click", (evt) => {
    const target = evt.target.closest(".nav__item");

    if (target) toggleActive();
  });
}

