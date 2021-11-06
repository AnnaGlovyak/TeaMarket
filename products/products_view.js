export default class ProductsView {

    domElements = [
        {
            name: 'productList',
            selector: '.product-list'
        },
        {
            name: 'searchInput',
            selector: '#search-input-id'
        }
    ]

    linkDomElem () {
        this.dom = this.domElements.reduce((acc, cur) => {
            acc[cur.name] = document.querySelector(cur.selector);
            return acc;
        }, {})
    }

    constructor ( changeSearch ) {
        this.linkDomElem();
        this.dom.searchInput.addEventListener('change', changeSearch)
    }

    createList ( list ) {
        const productsHTML = list.map( el => this.renderProdCard(el));
        this.dom.productList.innerHTML = productsHTML.join('');
    }

    getSearchData () {
        console.log(this.dom.searchInput.value)
        return this.dom.searchInput.value;
    }

    renderProdCard ( { name, region, weight, price, image, description, types, kind, manufactures, packages, category, roast} ) {
        if ( category === 'coffee') {
            types = roast;
        }
        return `<div class="col-md-4">
                    <section class="panel product-card">
                        <div class="pro-img-box">
                            <img src="${ image }" alt="image" />
                            <a href="#" class="adtocart">
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </div>
                        <div class="product-card-body" onclick="document.getElementById('id01').style.display='block'">
                                <h4>
                                    <a class="btn btn-card product-card-title">${ name }</a>
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