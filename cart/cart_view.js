import View from '../common/view.js'
import renderCartModal from '../common/render_cart_modal.js'

export default class CartView extends View {

    cartDomElem = [
        {
            name: 'cartModal',
            selector: '.products'
        }
    ]

    constructor () {
        super();
        this.priceTotal = +localStorage.getItem( 'priceTotal' ) || 0;
        this.domCartButton = document.querySelector( '#cart-button' );
        this.domCartTotalPrice = document.querySelector( '#cart-span' );
        this.domCartButton.innerText = this.priceTotal;
        this.domCartTotalPrice.innerText = this.priceTotal;
        this.resultData = {};
        this.linkDomElem( this.cartDomElem );
    }
    
    productCartHandler = ( dataCard ) => {

        this.priceTotal += +dataCard.price;
        this.qty = 0;
        const localCheck = localStorage.getItem( `product-id-${dataCard.id}` );
        
        if ( localCheck ) {
            const parse = JSON.parse( localStorage.getItem( `product-id-${dataCard.id}` ) );
            this.qty = +parse.qty + 1;
        } else {
            this.qty = 1;
        }

        for( let key in localStorage ) {
            if ( !localStorage.hasOwnProperty( key ) ) {
                localStorage.setItem( `product-id-${dataCard.id}`, JSON.stringify( { 'id': +dataCard.id, 'price': +dataCard.price, 'qty': this.qty, 'card': dataCard } ) );
                localStorage.setItem( `priceTotal`, this.priceTotal );
            } 
            
            const dataLocal = {}
            dataLocal.id = localStorage.getItem( `product-id-${dataCard.id}` );
            dataLocal.total = localStorage.getItem( `priceTotal` );
        }

        this.resultData[`prod-${dataCard.id}`] = JSON.parse( localStorage.getItem( `product-id-${dataCard.id}` ) );
        this.resultData.total = +localStorage.getItem( `priceTotal` );

        this.cardData = {};
        for ( const key in this.resultData)    {
            if (key !== 'total') {
                let { card } = this.resultData[key];
                this.cardData.key = key;
                this.cardData.data = card;
                this.cardData.qty = this.resultData[key].qty;
            } else {
                if ( key !== null ){
                    this.cardData.total = this.resultData.total;
                }
            }
        }

        this.domCartButton.innerText = this.priceTotal;
        this.domCartTotalPrice.innerText = this.priceTotal;

        this.createCart(this.cardData);
    }

    createCart = ( data ) => {
        console.log(data)
        const modalHTML = renderCartModal( data );
        this.dom.cartModal.innerHTML += modalHTML;
    }
}