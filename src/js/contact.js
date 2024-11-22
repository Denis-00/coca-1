import '../scss/contact.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contact/phone.js';
import { footerAccordion } from './components/home/accordion.js';

useTheme();
useBurger();
usePhone();
footerAccordion();
