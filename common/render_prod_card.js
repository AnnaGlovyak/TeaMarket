export default function renderProdCard( data ) {
        if (data.category === 'coffee') {
            data.types = data.roast;
        }

        return `<div class="col-sm-6 col-lg-4 col-12">
                    <section class="panel product-card">
                        <div class="pro-img-box">
                            <img src="${ data.image }" alt="image" class="d-flex justify-content-center" />
                            <a href="#" class="adtocart">
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </div>
                        <div class="product-card-body">
                                <h4>
                                    <a class="btn btn-card product-card-title" data-product-id="${ data.id }">${ data.name }</a>
                                </h4>
                            <div class="text-center">
                                <div class="descriptions">${ data.weight } g</div>
                                <div class="descriptions">${ data.types }, ${data.kind }</div>
                                <div class="descriptions"><u>${ data.region }</u></div>
                                <div class="descriptions">${ data.manufactures }</div>
                            </div>
                            <p class="price">${ data.price } $</p>
                        </div>
                    </section>
                </div>`;
    }