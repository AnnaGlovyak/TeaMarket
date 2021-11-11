import Publisher from '../common/publisher.js';
import PaginationView from './pagination_view.js';

export default class PaginationController {

    constructor() {
        this.view = new PaginationView( this.clickPagination );
        Publisher.subscribe( Publisher.events.clickPagBtn, this.clickPagination);
        Publisher.subscribe( Publisher.events.loadData, this.createPagBtn)
    }

    clickPagination = ( event ) => {
        const count = this.view.clickOnPagBut( event );
        Publisher.notify( Publisher.events.renderProdOnPage, count );
    }

    createPagBtn = ( data ) => {
        this.view.setupPagination( data.length );
    }


}


