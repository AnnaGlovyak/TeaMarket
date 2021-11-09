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
    }

   init = async () => {
       const data = await this.model.loadData();
       this.view.createList( data );
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

}

