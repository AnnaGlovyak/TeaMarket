import ProductController from './products/products_controller.js';
import ModalController from './modal/modal_controller.js';
import FilterController from './filter/filter_controller.js';
import SearchController from './search/search_controller.js';
import PaginationController from './pagination/pagination_controller.js';
import CartController from './cart/cart_controller.js';
import HistoryController from './history/history_controller.js';
import MessengerController from './messenger/messenger_controller.js';

const products = new ProductController();
const modal = new ModalController();
const filter = new FilterController();
const search = new SearchController();
const paggination = new PaginationController();
const cart = new CartController();
const messenger = new MessengerController();
const history = new HistoryController();

products.init();
