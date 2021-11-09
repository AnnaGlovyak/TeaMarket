
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

    constructor ( changeSearch, clickOnProduct) {
        super();
        this.linkDomElem( this.domElem );
        this.dom.searchInput.addEventListener('change', changeSearch);
        this.clickOnProduct = clickOnProduct;
    }

    createList(list) {
        const productsHTML = list.map((el) => this.renderProdCard(el));
        this.dom.productList.innerHTML = productsHTML.join('');
        this.linkProducts();
    }

    linkProducts() {
        this.domProducts = document.querySelectorAll('.product-card-title');
        this.domProducts.forEach( el => el.addEventListener('click', this.clickOnProduct));
    }

    getSearchData() {
        return this.dom.searchInput.value;
    }

    getProductId (event) {
        return  event.target.attributes['data-product-id'].value;
    }
}