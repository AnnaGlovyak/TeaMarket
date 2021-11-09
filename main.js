import { showFilterForCategory } from './filterSwitcher.js';
import ProductController from './products/products_controller.js';
import ModalController from './modal/modal_controller.js';
import FilterController from './filter/filter_controller.js';

const products = new ProductController();
const modal = new ModalController();
const filter = new FilterController();

filter.init();

products.init();

showFilterForCategory();