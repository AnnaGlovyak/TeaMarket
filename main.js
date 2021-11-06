import { showFilterForCategory } from './filterSwitcher.js';
import ProductController from './products/products_controller.js';

const products = new ProductController();

products.init();

showFilterForCategory();