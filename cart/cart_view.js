import View from '../common/view.js'

export default class CartView extends View {

    constructor () {
        super();
        this.priceTotal = +localStorage.getItem('priceTotal');
        this.domCartButton = document.querySelector('#cart-button');
        this.domCartTotalPrice = document.querySelector('#cart-span');
        this.domCartButton.innerText = this.priceTotal;
        this.domCartTotalPrice.innerText = this.priceTotal;
    }
    
    cart = (dataCard) => {
        this.domProductsCart = document.querySelectorAll('.adtocart');
        
        this.domProductsCart.forEach( el => {
            console.log(el)
                el.addEventListener('click', ()=> {
                    const id = el.attributes['data-product-id'].value;
                    const price = el.attributes['data-product-price'].value;

                    console.log(id, price);
                    this.priceTotal += +price;
                    console.log(this.priceTotal)

                    for(let key in localStorage) {
                        if (!localStorage.hasOwnProperty(key)) {
                            localStorage.setItem(`product-id-${id}`, [ +id, +price ]);
                            localStorage.setItem(`priceTotal`, this.priceTotal);
                        }
                    }
                            
                    this.domCartButton.innerText = this.priceTotal;
                    this.domCartTotalPrice.innerText = this.priceTotal;
            });
        });

    }
}