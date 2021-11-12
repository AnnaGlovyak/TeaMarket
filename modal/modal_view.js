import renderProdModal from '../common/render_prod_modal.js';
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

    createModal = ( data ) => {
        const modalHTML = renderProdModal( data );
        this.dom.productModal.innerHTML = modalHTML;
    }

}