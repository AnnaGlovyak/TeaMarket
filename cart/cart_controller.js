import CartView from './cart_view.js';
import Publisher from '../common/publisher.js'

export default class CartController {

    constructor(){
        this.view = new CartView();
        Publisher.subscribe( Publisher.events.clickProductCart, this.clickOnProductCart );
        Publisher.subscribe( Publisher.events.loadData, this.loadCart );
        // Publisher.subscribe( Publisher.events.checkoutProcess, this.checkoutProcess );
    }
    
    clickOnProductCart = (dataCard) => {
        this.view.productCartHandler(dataCard);
    }
    
    loadCart = () => {
        this.view.createCart();
    }
    
    // checkoutProcess = () => {
    //     this.view.checkout();
    // }
}
