import { showFilterForCategory } from './filterSwitcher.js';
import ProductController from './products/products_controller.js';
import ModalController from './modal/modal_controller.js';

const products = new ProductController();
const modal = new ModalController();

products.init();

showFilterForCategory();