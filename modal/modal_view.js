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
        const modalHTML = await this.renderModal( data );
        this.dom.productModal.innerHTML = modalHTML;
    }
}