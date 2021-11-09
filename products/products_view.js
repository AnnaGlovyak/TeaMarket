
import Publisher from '../common/publisher.js';
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

    constructor ( changeSearch ) {
        super();
        this.linkDomElem( this.domElem );
        this.dom.searchInput.addEventListener('change', changeSearch);
    }

    async createList(list) {
        const productsHTML = list.map((el) => this.renderProdCard(el));
        this.dom.productList.innerHTML = await productsHTML.join('');

        this.domProducts = document.querySelectorAll('.product-card-title');
        this.domProducts.forEach( el => el.addEventListener('click', this.getProductId));
    }

    getSearchData() {
        return this.dom.searchInput.value;
    }

    getProductId (event) {
        const id = event.target.attributes['data-product-id'].value;
        Publisher.notify( Publisher.events.clickProduct, id);
    }
}