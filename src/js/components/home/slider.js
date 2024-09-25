import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const insightSlider = () => {
  const swiper = new Swiper('.insight__slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    modules: [Navigation],
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },

    navigation: {
      nextEl: '.insight__nav-next',
      prevEl: '.insight__nav-prev',
    },
  });
};

export const testimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    loop: true,
    slidesPerView: 1,
    modules: [Navigation],
    centeredSlides: true,
  

    navigation: {
      nextEl: '.testimonials__nav-next',
      prevEl: '.testimonials__nav-prev',
    },
  });
};
