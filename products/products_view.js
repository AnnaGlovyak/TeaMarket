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
    ]

    constructor ( changeSearch ) {
        super();
        this.linkDomElem( this.domElem );
        this.dom.searchInput.addEventListener('change', changeSearch);
    }

    async createList ( list ) {
        const productsHTML = list.map( el => this.renderProdCard(el));
        this.dom.productList.innerHTML = await productsHTML.join('');

        this.domProducts = document.querySelectorAll('.product-card-title');
        this.domProducts.forEach( el => el.addEventListener('click', this.getProductId));
    }

    getSearchData () {
        return this.dom.searchInput.value;
    }

    getProductId (event) {
        const id = event.target.attributes['data-product-id'].value;
        Publisher.notify( Publisher.events.clickProduct, id);
    }

    renderProdCard ( { id, name, region, weight, price, image, description, types, kind, manufactures, packages, category, roast} ) {
        if ( category === 'coffee') {
            types = roast;
        }
        return `<div class="col-sm-6 col-lg-4 col-12">
                    <section class="panel product-card">
                        <div class="pro-img-box">
                            <img src="${ image }" alt="image" />
                            <a href="#" class="adtocart">
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </div>
                        <div class="product-card-body">
                                <h4>
                                    <a class="btn btn-card product-card-title" data-product-id="${ id }">${ name }</a>
                                </h4>
                            <div class="text-center">
                                <div class="descriptions">${ weight } g</div>
                                <div class="descriptions">${ types }, ${ kind }</div>
                                <div class="descriptions"><u>${ region }</u></div>
                                <div class="descriptions">${ manufactures }</div>
                            </div>
                            <p class="price">${ price } $</p>
                        </div>
                    </section>
                </div>`
    }
}