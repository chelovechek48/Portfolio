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
    delay: 5000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
});
