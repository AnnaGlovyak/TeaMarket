import CartView from './cart_view.js';
import Publisher from '../common/publisher.js'

export default class CartController {

    constructor(){
        this.view = new CartView( this.sendOrder );
        Publisher.subscribe( Publisher.events.clickProductCart, this.clickOnProductCart );
        Publisher.subscribe( Publisher.events.loadData, this.loadCart );
    }
    
    clickOnProductCart = (dataCard) => {
        this.view.productCartHandler(dataCard);
    }
    
    loadCart = () => {
        this.view.createCart();
    }

    sendOrder = ( event ) => {
        const sendData = this.view.createOrder();
        Publisher.notify( Publisher.events.sendMessage, sendData );
        event.preventDefault();
        document.getElementById('id02').style.display='none';//need to replace
    }
}
