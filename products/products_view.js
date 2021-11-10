
import renderProdCard from '../common/render_prod_card.js';
import View from '../common/view.js'
export default class ProductsView extends View {

    domElem = [
        {
            name: 'productList',
            selector: '.product-list'
        },
        {
            name: 'searchInput',
            selector: '#search-input-id'
        }
    ];

    constructor ( clickOnProduct) {
        super();
        this.linkDomElem( this.domElem );
        this.clickOnProduct = clickOnProduct;
        // this.clickOnProductCart = clickOnProductCart;
        this.priceTotal = +localStorage.getItem('priceTotal');
    }

    createList(list) {
        const productsHTML = list.map((el) => renderProdCard(el));
        this.dom.productList.innerHTML = productsHTML.join('');
        this.linkProducts();
    }

    linkProducts() {
        this.domProducts = document.querySelectorAll('.product-card-title');
        this.domProductsCart = document.querySelectorAll('.adtocart');
        this.domCartButton = document.querySelector('#cart-button');
        this.domCartTotalPrice = document.querySelector('#cart-span');
        
        // localStorage.setItem(`priceTotal`, priceTotal);

        this.domProductsCart.forEach( el => {
            console.log(+this.priceTotal);
                el.addEventListener('click', ()=> {
                    const id = el.attributes['data-product-id'].value;
                    const price = el.attributes['data-product-price'].value;
                    // const priceTotalStorage = localStorage.getItem('priceTotal');
                    // console.log(priceTotalStorage)

                    console.log(id, price);
                    this.priceTotal += +price;

                    for(let key in localStorage) {
                        if (!localStorage.hasOwnProperty(key)) {
                            localStorage.setItem(`product-id-${id}`, [ +id, +price ]);
                            localStorage.setItem(`priceTotal`, this.priceTotal);
                        }
                    }
                            
                    this.domCartButton.innerText = this.priceTotal;
                    this.domCartTotalPrice.innerText = this.priceTotal;

                    // localStorage.setItem(`product-id-${id}`, [ +id, +price ]);
                    // localStorage.setItem(`priceTotal`, priceTotal);
            });
            
            // return el.addEventListener('click', this.clickOnProductCart);
        });

        this.domProducts.forEach( el => el.addEventListener('click', this.clickOnProduct));
    }

    getProductId (event) {
        return  event.target.attributes['data-product-id'].value;
    }
}