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
        this.totalHtml = document.getElementById( 'total' );
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
                dataCard.qty = this.qty;
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
            if ( key !== 'total' ) {
                const { card } = this.resultData[key];
                const qty = this.resultData[key].qty;
                this.cardData.key = key;
                card.qty = qty;
                this.cardData.data = card;
            } else {
                if ( key !== null ){
                    this.cardData.total = this.resultData.total;
                }
            }
        }

        this.domCartButton.innerText = this.priceTotal;
        this.domCartTotalPrice.innerText = this.priceTotal;
        
        this.createCart();
    }

    allStorage = () => {

        var values = [],
            keys = Object.keys( localStorage ),
            i = keys.length;

        while ( i-- ) {
            if ( keys[i] !== 'priceTotal' ) {
                values.push( JSON.parse( localStorage.getItem( keys[i] ) ));
            }
        }
        const total = localStorage.getItem( 'priceTotal' );
        return { values, total };
    }
    
    createCart = () => {
        this.dom.cartModal.innerHTML = '';
        const localStorageData = this.allStorage();
        const total = localStorageData.total;

        localStorageData.values.forEach( el => {
            const values = el.card;
            const id = +el.card.id;

            this.modalHTML = renderCartModal( { values, total } );
            this.dom.cartModal.innerHTML += this.modalHTML;
        });

        const productsInCartIncrease = document.querySelectorAll( '.plus-btn' );
        const productsInCartDecrease = document.querySelectorAll( '.minus-btn' );
        const productsInCartDelete = document.querySelectorAll( '.delete-btn' );

        productsInCartIncrease.forEach( el => {
            el.addEventListener( 'click', () => {
                const id = +( el.classList[1].split( "-" )[1] );
                this.productIncrease( id );
            });
        });

        productsInCartDecrease.forEach( el => {
            el.addEventListener( 'click', () => {
                const id = +( el.classList[1].split( "-" )[1] );
                this.productDecrease( id );
            });
        });

        productsInCartDelete.forEach( el => {
            el.addEventListener( 'click', () => {
                const id = +( el.classList[1].split( "-" )[1] );
                this.productDelete( id );
            });
        });
    }

    productIncrease = ( id ) => {
        const localStorageData = this.allStorage();
        localStorageData.values.forEach( el => {
            const values = el.card;
            const idLocalSt = +el.card.id;
            if (id === idLocalSt){
                values.qty += 1;
                const priceProd = +values.price;
                localStorage.setItem( `product-id-${idLocalSt}`, JSON.stringify( { 'id': idLocalSt, 'price': +values.price, 'qty': values.qty, 'card': values } ) );
                const priceTotal = +localStorage.getItem("priceTotal");
                const totalPr = priceTotal+priceProd;
                localStorage.setItem("priceTotal", totalPr);
                this.domCartButton.innerText = totalPr;
                this.domCartTotalPrice.innerText = totalPr;
            }
        });
        
        this.createCart();
    }
    
    productDecrease = ( id ) => {
        const localStorageData = this.allStorage();
        localStorageData.values.forEach( el => {
            const values = el.card;
            const idLocalSt = +el.card.id;
            if (id === idLocalSt && values.qty != 0){
                values.qty -= 1;
                const priceProd = +values.price;
                localStorage.setItem( `product-id-${idLocalSt}`, JSON.stringify( { 'id': idLocalSt, 'price': +values.price, 'qty': values.qty, 'card': values } ) );
                let priceTotal = +localStorage.getItem("priceTotal");
                priceTotal-=priceProd;
                localStorage.setItem("priceTotal", priceTotal);
                this.domCartButton.innerText = priceTotal;
                this.domCartTotalPrice.innerText = priceTotal;
            }
        });
        
        this.createCart();
    }

    productDelete = ( id ) => {
        const localStorageData = this.allStorage();
        localStorageData.values.forEach( el => {
            const values = el.card;
            const idLocalSt = +el.card.id;
            if (id === idLocalSt){
                const qty = +values.qty
                const priceProd = +values.price;
                let priceTotal = +localStorage.getItem("priceTotal");
                priceTotal-=(priceProd*qty);
                localStorage.removeItem(`product-id-${id}`)
                localStorage.setItem("priceTotal", priceTotal);
                if (this.allStorage().total == 0) { this.totalHtml.innerHTML = `$${0}` };
                this.domCartButton.innerText = priceTotal;
                this.domCartTotalPrice.innerText = priceTotal;
            }
        });

        this.createCart();
    }

}