import Publisher from '../common/publisher.js';
import ProductsModel from './products_model.js';
import ProductsView from './products_view.js';

export default class ProductController {

    constructor(){
        this.model = new ProductsModel();
        this.view = new ProductsView(this.changeSearch, this.clickOnProduct);
        Publisher.subscribe( Publisher.events.clickProduct, this.openModal );
        Publisher.subscribe( Publisher.events.clickCategFiltr, this.sendFilterData )
    }

   init = async () => {
       const data = await this.model.getData();
       this.view.createList( data );
   }

   changeSearch = async () => {
       const searchData = this.view.getSearchData();
       const data = await this.model.getData( searchData );
       this.view.createList( data ); 
   }

   openModal = async ( id ) => {
        const modalData = await this.model.getModalData( id )
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

