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

    constructor () {
        this.linkDomElem();
        this.renderList = [];
    }

    // load list
    createList ( list ) {
        this.renderList = list;
        const productsHTML = this.renderList.map( el => {
            return this.renderProdCard(el)
        });

        this.dom.searchInput.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();
            console.log(searchString)
            this.filtredProducts = this.renderList.filter(product => {
                return product.name.toLowerCase().includes(searchString) || product.package.toLowerCase().includes(searchString)|| product.description.toLowerCase().includes(searchString)
            })

            const productsHTMLnew = this.filtredProducts.map( el => {
                return this.renderProdCard(el)
            });
           
            this.dom.productList.insertAdjacentHTML('afterbegin', productsHTMLnew.join('') );

        });
        
        this.dom.productList.insertAdjacentHTML( 'beforeend', productsHTML.join('') );
    }

    // display
    renderProdCard ( { name, region, weight, price, image, description, types, kind, manufactures, packages, category, roast} ) {
        if ( category === 'coffee') {
            types = roast;
        }
        return `<div class="col-md-4">
                    <section class="panel product-card">
                        <div class="pro-img-box">
                            <img src="${ image }" alt="image" class="d-flex justify-content-center"/>
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