export default class Render {
    constructor({ id, name, region, weight, price, image, description, types, kind, manufactures, packages, category, roast }) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.weight = weight;
        this.price = price;
        this.image = image;
        this.image = image;
        this.description = description;
        this.types = types;
        this.kind = kind;
        this.manufactures = manufactures;
        this.packages = packages;
        this.category = category;
        this.roast = roast;
    }

    renderModal() {
        if (this.category === 'coffee') {
            this.types = this.roast;
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
                                    ${this.name}
                                </h5>
                                <div class="row">
                                    <div class=" col-6">
                                        <img class="modal-prod-picture" src="${this.image}" alt="image" />
                                    </div>
                                    <div class="modal-prod-description col-6">
                                        <p class="modal-text-paragraph"> 
                                            ${this.description}
                                        </p>
                                        <div class="product_meta row">
                                            <span class="posted_in">
                                                <strong>Categories:</strong>
                                                ${this.types}, ${this.kind} 
                                            </span>
                                            <span class="tagged_as">
                                                <strong>Company:</strong> 
                                                ${this.manufactures} , ${this.region}
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

    renderProdCard() {
        if (this.category === 'coffee') {
            this.types = this.roast;
        }

        return `<div class="col-sm-6 col-lg-4 col-12">
                    <section class="panel product-card">
                        <div class="pro-img-box">
                            <img src="${this.image}" alt="image" class="d-flex justify-content-center" />
                            <a href="#" class="adtocart">
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </div>
                        <div class="product-card-body">
                                <h4>
                                    <a class="btn btn-card product-card-title" data-product-id="${this.id}">${this.name}</a>
                                </h4>
                            <div class="text-center">
                                <div class="descriptions">${this.weight} g</div>
                                <div class="descriptions">${this.types}, ${this.kind}</div>
                                <div class="descriptions"><u>${this.region}</u></div>
                                <div class="descriptions">${this.manufactures}</div>
                            </div>
                            <p class="price">${this.price} $</p>
                        </div>
                    </section>
                </div>`;
    }
}
