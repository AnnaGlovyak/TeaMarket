import View from '../common/view.js'

export default class CartView extends View {

    constructor () {
        super();
        this.priceTotal = +localStorage.getItem('priceTotal') || 0;
        this.domCartButton = document.querySelector('#cart-button');
        this.domCartTotalPrice = document.querySelector('#cart-span');
        this.domCartButton.innerText = this.priceTotal;
        this.domCartTotalPrice.innerText = this.priceTotal;
    }
    
    cart = ( dataCard ) => {

                    this.priceTotal += +dataCard.price;
                    console.log(this.priceTotal)

                    for(let key in localStorage) {
                        if (!localStorage.hasOwnProperty(key)) {
                            localStorage.setItem(`product-id-${dataCard.id}`, [ +dataCard.id, +dataCard.price ]);
                            localStorage.setItem(`priceTotal`, this.priceTotal);
                        }
                    }
                    this.domCartButton.innerText = this.priceTotal;
                    this.domCartTotalPrice.innerText = this.priceTotal;

    }
}