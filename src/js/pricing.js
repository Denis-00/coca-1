import '../assets/scss/pricing.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { footerAccordion } from './components/home/accordion.js';
import { usePriceSwitcher } from './components/pricing/pricing-switcher.js';

useTheme();
useBurger();
footerAccordion();
usePriceSwitcher();