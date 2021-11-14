export default function renderProdModal( data ) {
        if ( data.category === 'coffee') {
             data.types =  data.roast;
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
                                    ${ data.name }
                                </h5>
                                <div class="row">
                                    <div class=" col-md-6 text-center">
                                        <img class="modal-prod-picture" src="${ data.image }" alt="image" />
                                    </div>
                                    <div class="modal-prod-description col-md-6">
                                        <p class="modal-text-paragraph"> 
                                            ${ data.description }
                                        </p>
                                        <div class="product_meta row">
                                            <span class="posted_in">
                                                <strong>Categories:</strong>
                                                ${ data.types }, ${ data.kind } 
                                            </span>
                                            <span class="tagged_as">
                                                <strong>Company:</strong> 
                                                ${ data.manufactures} , ${ data.region }
                                            </span>
                                        </div>
                                        <div class="m-bot15 text-center">
                                            <br>
                                        </div>
                                        <div class="form-group text-center">
                                            <label>Quantity</label>
                                            <input type="quantiy" placeholder="1" class="form-control quantity input-center" id="qty-${data.id}"/><span class="pro-price"> $ ${ data.price }</span>
                                        </div>
                                        <p class="text-center">
                                            <button class="btn btn-round btn-danger add-to-cart modal-id-${data.id}" type="button">
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