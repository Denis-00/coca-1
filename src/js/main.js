import '../scss/main.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { insightSlider, testimonialsSlider } from './components/home/slider.js';
import { footerAccordion } from './components/home/accordion.js';

useTheme();
useBurger();
insightSlider();
testimonialsSlider();
footerAccordion();


