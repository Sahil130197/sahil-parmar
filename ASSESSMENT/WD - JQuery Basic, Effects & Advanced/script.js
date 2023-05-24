const navSlide = () => {
  const hamburgerMenu = document.querySelector(".burger");
  const menu = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", function () {
    menu.classList.toggle('active');
  });
  //   const burger = document.querySelectorByClassName('burger');
  //   const nav = document.querySelectorByClassName('nav-links');

  //   burger.addEventListener('click', () => {
  //     nav.classList.toggle('nav-active');
  //   });
};

navSlide();
