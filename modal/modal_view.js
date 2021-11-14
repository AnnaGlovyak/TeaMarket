import allStorage from '../common/getStorage.js';
import renderProdModal from '../common/render_prod_modal.js';
import View from "../common/view.js";
import CartView from '../cart/cart_view.js'
export default class ModalView extends View {

    modalDomElem = [
                {
                    name: 'productModal',
                    selector: '.product-modal'
                }
            ]

    constructor() {
        super();
        this.cart_view = new CartView();
        this.linkDomElem( this.modalDomElem );
    }

    createModal = ( data ) => {
        const modalHTML = renderProdModal( data );
        this.dom.productModal.innerHTML = modalHTML;
        const addToCartBtn = document.querySelectorAll( `.modal-id-${data.id}` );
        const localStorageData = allStorage();
        let inputData = document.getElementById( `qty-${data.id}` );

        addToCartBtn.forEach( el => {
            el.addEventListener( 'click', () => {
                let num = +inputData.value;
                if (num === "" || num === 0) { num = 1 }
                const localCheck = JSON.parse( localStorage.getItem( `product-id-${data.id}` ) );                
                if ( localCheck!==null ) {
                    this.cart_view.productCartHandler(localCheck.card, num)
                } else {
                    this.cart_view.productCartHandler(data, num)
                }
            });
        });
        
    }
    
}