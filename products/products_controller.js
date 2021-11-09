import Publisher from '../common/publisher.js';
import ProductsModel from './products_model.js';
import ProductsView from './products_view.js';

export default class ProductController {

    constructor(){
        this.model = new ProductsModel();
        this.view = new ProductsView( this.clickOnProduct );
        Publisher.subscribe( Publisher.events.clickProduct, this.openModal );
        Publisher.subscribe( Publisher.events.clickCategFiltr, this.sendFilterData );
        Publisher.subscribe( Publisher.events.changeSrchInp, this.dataForSearch );
        Publisher.subscribe( Publisher.events.renderProdOnPage, this.renderProdOnPage )
    }

   init = async () => {
       const data = await this.model.loadData();
       Publisher.notify( Publisher.events.loadData, data.length );
       const products  = this.model.sliceDataBuyPage();
       this.view.createList( products );     
   }

   dataForSearch = ( searchData ) => {
       const data = this.model.dataBySearch( searchData );
       this.view.createList( data ); 
   }

   openModal = ( id ) => {
        const modalData = this.model.getModalData( id )
        Publisher.notify( Publisher.events.buildModal, modalData)
   }

   sendFilterData = ( filter ) => {
       const newData = this.model.filterData( filter );
       this.view.createList( newData );
   }

   clickOnProduct = ( event ) => {
        const id = this.view.getProductId( event );
        Publisher.notify( Publisher.events.clickProduct, id);
   }

   renderProdOnPage = ( { start, end } ) => {
        const pageData = this.model.sliceDataBuyPage( start, end );
        this.view.createList( pageData );
   }

}

