import CartView from './cart_view.js';
import Publisher from '../common/publisher.js'

export default class CartController {

    constructor(){
        this.view = new CartView();
        Publisher.subscribe( Publisher.events.clickProductCart, this.clickOnProductCart );
    }

    clickOnProductCart = (dataCard) => {
        this.view.productCartHandler(dataCard);
    }

}
