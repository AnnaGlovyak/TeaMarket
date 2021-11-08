import View from "../common/view.js";

export default class ModalView extends View {

    modalDomElem = [
                {
                    name: 'productModal',
                    selector: '.product-modal'
                }
            ]

    constructor() {
        super();
        this.linkDomElem( this.modalDomElem );
    }

    createModal = async ( data ) => {
        console.log('hi from create modal', data)
        const modalHTML = await this.renderModal( data );
        this.dom.productModal.innerHTML = modalHTML;
    }

    renderModal ( { id, name, region, weight, price, image, description, types, kind, manufactures, packages, category, roast} ) {
        if ( category === 'coffee') {
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
                                    ${ name }
                                </h5>
                                <div class="row">
                                    <div class=" col-6">
                                        <img class="modal-prod-picture" src="${ image }">
                                    </div>
                                    <div class="modal-prod-description col-6">
                                        <p class="modal-text-paragraph"> 
                                            ${ description }
                                        </p>
                                        <div class="product_meta row">
                                            <span class="posted_in">
                                                <strong>Categories:</strong>
                                                ${ types }, ${ kind } 
                                            </span>
                                            <span class="tagged_as">
                                                <strong>Company:</strong> 
                                                ${ manufactures } , ${ region }
                                            </span>
                                        </div>
                                        <div class="m-bot15 text-center">
                                            <br>
                                        </div>
                                        <div class="form-group text-center">
                                            <label>Quantity</label>
                                            <input type="quantiy" placeholder="1" class="form-control quantity input-center"/><span class="pro-price"> $ ${ price }</span>
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
                </div>`
    }
}