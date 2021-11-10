
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
    }

    createList(list) {
        const productsHTML = list.map((el) => renderProdCard(el));
        this.dom.productList.innerHTML = productsHTML.join('');
        this.linkProducts();
    }

    linkProducts() {
        this.domProducts = document.querySelectorAll('.product-card-title');
        this.domProductsCart = document.querySelectorAll('.adtocart');
                
        this.domProductsCart.forEach( el => {
                el.addEventListener('click', ()=> {
                    const id = el.attributes['data-product-id'].value;
                    localStorage.setItem(`product-id-${id}`, id);
            });
            
            // return el.addEventListener('click', this.clickOnProductCart);
        });

        this.domProducts.forEach( el => el.addEventListener('click', this.clickOnProduct));
    }

    getProductId (event) {
        return  event.target.attributes['data-product-id'].value;
    }
}