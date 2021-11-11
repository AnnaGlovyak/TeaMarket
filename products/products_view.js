import renderProdCard from '../common/render_prod_card.js';
import View from '../common/view.js';
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

    constructor ( clickOnProduct, clickOnProductCart ) {
        super();
        this.linkDomElem( this.domElem );
        this.clickOnProduct = clickOnProduct;
        this.clickOnProductCart = clickOnProductCart;
        this.priceTotal = +localStorage.getItem('priceTotal');
    }

    createList( list, { start, end } ) {
        this.data = list;
        const products = this.sliceDataBuyPage( start, end );
        const productsHTML = products.map((el) => renderProdCard(el));
        this.dom.productList.innerHTML = productsHTML.join('');
        this.linkProducts();
    }

    linkProducts() {
        this.domProducts = document.querySelectorAll('.product-card-title');
        this.domProductsCart = document.querySelectorAll('.adtocart');
                
        this.domProductsCart.forEach( el => el.addEventListener( 'click', this.clickOnProductCart ) );
        this.domProducts.forEach( el => el.addEventListener( 'click', this.clickOnProduct ) );

    }

    sliceDataBuyPage = ( start, end ) => {
        return this.data.slice( start, end );
    }
}