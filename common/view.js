export default class View {
    renderModal({ id, name, region, weight, price, image, description, types, kind, manufactures, packages, category, roast }) {
        if (category === 'coffee') {
            types = roast;
        }

        return `<div id="id01" class="w3-modal" style="display: block;">
                    <div class="w3-modal-content">
                        <span
                            onclick="document.getElementById('id01').style.display='none';"
                            class="w3-button w3-display-topright"
                            >&times;</span
                        >
                        <div class="w3-container">
                            <div class="modal-text">
                                <br />
                                <h5 class="title row justify-content-center">
                                    ${name}
                                </h5>
                                <div class="row">
                                    <div class=" col-6">
                                        <img class="modal-prod-picture" src="${image}" alt="image" />
                                    </div>
                                    <div class="modal-prod-description col-6">
                                        <p class="modal-text-paragraph"> 
                                            ${description}
                                        </p>
                                        <div class="product_meta row">
                                            <span class="posted_in">
                                                <strong>Categories:</strong>
                                                ${types}, ${kind} 
                                            </span>
                                            <span class="tagged_as">
                                                <strong>Company:</strong> 
                                                ${manufactures} , ${region}
                                            </span>
                                        </div>
                                        <div class="m-bot15 text-center">
                                            <br>
                                        </div>
                                        <div class="form-group text-center">
                                            <label>Quantity</label>
                                            <input type="quantiy" placeholder="1" class="form-control quantity input-center"/><span class="pro-price"> $ ${price}</span>
                                        </div>
                                        <p class="text-center">
                                            <button class="btn btn-round btn-danger" type="button">
                                                <i class="fa fa-shopping-cart"></i> Add to Cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                                onclick="document.getElementById('id01').style.display='none'"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>`;
    }

    renderProdCard({ id, name, region, weight, price, image, description, types, kind, manufactures, packages, category, roast }) {
        if (category === 'coffee') {
            types = roast;
        }

        return `<div class="col-sm-6 col-lg-4 col-12">
                    <section class="panel product-card">
                        <div class="pro-img-box">
                            <img src="${image}" alt="image" class="d-flex justify-content-center" />
                            <a href="#" class="adtocart">
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </div>
                        <div class="product-card-body">
                                <h4>
                                    <a class="btn btn-card product-card-title" data-product-id="${id}">${name}</a>
                                </h4>
                            <div class="text-center">
                                <div class="descriptions">${weight} g</div>
                                <div class="descriptions">${types}, ${kind}</div>
                                <div class="descriptions"><u>${region}</u></div>
                                <div class="descriptions">${manufactures}</div>
                            </div>
                            <p class="price">${price} $</p>
                        </div>
                    </section>
                </div>`;
    }

    linkDomElem() {
        this.dom = this.domElements.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {});
    }
}
