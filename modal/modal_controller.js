import ModalView from './modal_view.js';
import Publisher from '../common/publisher.js'

export default class ModalController {

    constructor(){
        this.view = new ModalView();
        Publisher.subscribe( Publisher.events.buildModal, this.createModal)
        Publisher.subscribe( Publisher.events.buildCart, this.createModal)
    }

    createModal = ( data ) => {
        this.view.createModal( data );
    }
}