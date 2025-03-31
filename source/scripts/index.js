/* в этот файл добавляет скрипты*/

// мобильное меню
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// слайдер
new Swiper('.image-slider',{ /* настройки слайдера */
  /* настройки стрелок */
  navigation: {
    nextEl: '.swiper-button-next', /* следующий элемент */
    prevEl: '.swiper-button-prev' /* предыдущий элемент */
  },
});
