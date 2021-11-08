import View from '../common/view.js';

export default class ProductsView extends View {
    domElements = [
        {
            name: 'productList',
            selector: '.product-list'
        },
        {
            name: 'searchInput',
            selector: '#search-input-id'
        },
        {
            name: 'productModal',
            selector: '.product-modal'
        }
    ];

    constructor(changeSearch, openModal) {
        super();
        this.linkDomElem();
        this.dom.searchInput.addEventListener('change', changeSearch);
        this.openModal = openModal;
    }

    async createList(list) {
        const productsHTML = list.map((el) => this.renderProdCard(el));
        this.dom.productList.innerHTML = await productsHTML.join('');

        this.domProducts = document.querySelectorAll('.product-card-title'); /////not the best place for that
        this.domProducts.forEach((el) => el.addEventListener('click', this.openModal));
    }

    getSearchData() {
        return this.dom.searchInput.value;
    }

    getProductId(event) {
        return event.target.attributes['data-product-id'].value;
    }

    createModal = async (data) => {
        const modalHTML = await this.renderModal(data);
        this.dom.productModal.innerHTML = modalHTML;
    };
}
