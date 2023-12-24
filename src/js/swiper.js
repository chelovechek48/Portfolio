import Swiper from 'swiper';
import { Keyboard, Autoplay } from 'swiper/modules';

import '../styles/plugins/swiper.scss';

const swiperProducts = new Swiper('.works__swiper', {
  modules: [Keyboard, Autoplay],
  keyboard: {
    enabled: true,
  },
  autoplay: {
    enabled: true,
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
});

const worksLinks = document.querySelectorAll('.works__link');

worksLinks.forEach((el, index) => {
  el.addEventListener('focus', () => {
    swiperProducts.slideTo(index);
  });
});
