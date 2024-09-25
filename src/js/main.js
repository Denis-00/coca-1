import '../assets/scss/main.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { insightSlider, testimonialsSlider } from './components/home/slider.js';

useTheme();
useBurger();
insightSlider();
testimonialsSlider();

