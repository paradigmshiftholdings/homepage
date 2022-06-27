$(document).ready(function () {
  $(".testimonials").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      let final = count + inc;
      counter.innerText = final.toFixed(2);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target.toFixed();
    }
  };

  updateCount();
});

let menu = false;

const showMenu = () => {
  menu = !menu;
  const navMenu = document.querySelector(".mobile-links");
  if (menu === true) {
    navMenu.style.width = "100%";
  } else {
    navMenu.style.width = "0";
  }
};

feather.replace();
