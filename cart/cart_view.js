import View from '../common/view.js'
import ViewHistory from '../history/history_view.js'
import renderCartModal from '../common/render_cart_modal.js'
import allStorage, { getOrders } from '../common/getStorage.js';

export default class CartView extends View {

    cartDomElem = [
        {
            name: 'cartModal',
            selector: '.products'
        },
        {
            name: 'cartButton',
            selector: '#cart-button'
        },
        {
            name: 'cartTotalPrice',
            selector: '#cart-span'
        },
        {
            name: 'orderBtn',
            selector: '.order-form'
        },
        {
            name: 'customName',
            selector: '.custom-name'
        },
        {
            name: 'customPhone',
            selector: '.custom-phone'
        },
        {
            name: 'checkout',
            selector: '.checkout-btn'
        },
        {
            name: 'totalModalCart',
            selector: '#total'
        }
    ]

    constructor ( sendOrder ) {
        super();
        this.sendOrder = sendOrder;
        this.view_history = new ViewHistory();
        this.priceTotal = +localStorage.getItem( 'priceTotal' ) || 0;
        this.totalHtml = document.getElementById( 'total' );
        this.linkDomElem( this.cartDomElem );
        this.dom.cartButton.innerText = this.priceTotal;
        this.dom.cartTotalPrice.innerText = this.priceTotal;
        this.resultData = {};
        this.dom.orderBtn.addEventListener('submit', this.sendOrder)
        this.dom.checkout.addEventListener( 'click', ()=> this.checkout() );
    }
    
    productCartHandler = ( dataCard, qty = 0 ) => {

        this.qty = 0;
        const localCheck = localStorage.getItem( `product-id-${dataCard.id}` );
        let priceCount = 0;

        if ( localCheck && qty === 0 ) {
            const parse = JSON.parse( localStorage.getItem( `product-id-${dataCard.id}` ) );
            this.qty = +parse.qty + 1;
            priceCount = +dataCard.price;
        } else if ( qty === 0 ) {
            this.qty = 1;
            priceCount = +dataCard.price;
        } else {
            const parse = JSON.parse( localStorage.getItem( `product-id-${dataCard.id}` ) );
            if ( parse === null ) {
                this.qty = qty;
                priceCount = +dataCard.price * qty;
            }

            if ( parse !== null ) {
                this.qty = +parse.qty + qty;
                priceCount = +dataCard.price * qty;
            }
        }
        
        this.priceTotal = +localStorage.getItem( 'priceTotal' );
        this.priceTotal += priceCount;

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

        this.createCartData();
        this.createCart();
    }

    createCartData = () => {
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
        
        this.dom.cartButton.innerText = this.priceTotal;
        this.dom.cartTotalPrice.innerText = this.priceTotal;
    }
    
    createCart = () => {
        this.dom.cartModal.innerHTML = '';
        const localStorageData = allStorage();
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
        const localStorageData = allStorage();
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
                this.dom.cartButton.innerText = totalPr;
                this.dom.cartTotalPrice.innerText = totalPr;
            }
        });
        
        this.createCart();
    }
    
    productDecrease = ( id ) => {
        const localStorageData = allStorage();
        localStorageData.values.forEach( el => {
            const values = el.card;
            const idLocalSt = +el.card.id;
            if (id === idLocalSt && values.qty != 1){
                values.qty -= 1;
                const priceProd = +values.price;
                localStorage.setItem( `product-id-${idLocalSt}`, JSON.stringify( { 'id': idLocalSt, 'price': +values.price, 'qty': values.qty, 'card': values } ) );
                let priceTotal = +localStorage.getItem("priceTotal");
                priceTotal-=priceProd;
                localStorage.setItem("priceTotal", priceTotal);
                this.dom.cartButton.innerText = priceTotal;
                this.dom.cartTotalPrice.innerText = priceTotal;
            }
        });
        
        this.createCart();
    }

    productDelete = ( id ) => {
        const localStorageData = allStorage();
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
                if (allStorage().total == 0) { this.totalHtml.innerHTML = `$${0}` };
                this.dom.cartButton.innerText = priceTotal;
                this.dom.cartTotalPrice.innerText = priceTotal;
            }
        });

        this.createCart();
    }

    createOrder = () => {
        const order = {};
        const date = new Date();
        order.products = [];

        order.customName = this.dom.customName.value;
        order.customPhone = this.dom.customPhone.value;
        order.total = this.dom.cartTotalPrice.innerText;
        order.time = date.toDateString();

        const localStorageData = allStorage();
        localStorageData.values.forEach( el => {
            order.products.push(el.card);
        })
       
        return order;
    }

    checkout = ( ) => {

        const storageData = allStorage();
        const ordersData = getOrders();
        const ordersLength = ordersData.length+1;
        let id, price, qty, card;
        let name, manufactures, region, weight;
        let packageType;

        const totalAmount = +storageData.total;
        const totalProdList = storageData.values;

        totalProdList.forEach( el => {
            id = el.id;
            price = el.price;
            qty = el.qty;
            card = el.card;
            name = card.name;
            manufactures = card.manufactures;
            region = card.region;
            weight = card.weight;
            packageType = card.package;
            
        })

        if (totalProdList.length !== 0) {
            const orderFinal = {};
            totalProdList.map((el, index) => {
                const order = { 'id': +el.id, 'price': +el.price, 'qty': +el.qty, 'name': el.card.name, 'manufactures': el.card.manufactures, 'packageType': el.card.packageType, 'region': el.card.region, 'weight': +el.card.weight, 'totalAmount': totalAmount };
                orderFinal[index] = order;
            })

            localStorage.setItem( `order-${ordersLength}`, JSON.stringify( orderFinal ) );
            
            this.dom.cartButton.innerText = 0;
            this.dom.cartTotalPrice.innerText = 0;
            this.dom.totalModalCart.innerText = '$0'

            totalProdList.map((el) => {
                if (el.id !== null || el.id !== undefined) {
                    localStorage.removeItem(`product-id-${el.id}`)
                }
            });
            
            localStorage.setItem( `priceTotal`, 0 );
            this.createCart();
        }
        this.view_history.loadHistory();
    }
}