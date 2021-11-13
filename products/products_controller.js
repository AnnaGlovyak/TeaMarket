import Publisher from '../common/publisher.js';
import ProductsModel from './products_model.js';
import ProductsView from './products_view.js';

export default class ProductController {

    constructor(){
        this.model = new ProductsModel();
        this.view = new ProductsView( this.clickOnProduct, this.clickOnProductCart );
        Publisher.subscribe( Publisher.events.clickProduct, this.openModal );
        Publisher.subscribe( Publisher.events.clickCart, this.openCart );
        Publisher.subscribe( Publisher.events.clickCategFiltr, this.sendFilterData );
        Publisher.subscribe( Publisher.events.changeSrchInp, this.dataForSearch );
        Publisher.subscribe( Publisher.events.renderProdOnPage, this.renderProdOnPage );
        Publisher.subscribe( Publisher.events.priceRangeChng, this.sendDataByPrice );
    }

   init = async () => {
       this.data = await this.model.loadData();
       this.sendData( this.data )    
   }

   dataForSearch = ( searchData ) => {
       const data = this.model.dataBySearch( searchData );
       this.sendData( data );
   }

   openModal = ( id ) => {
        const modalData = this.model.getModalData( id );
        Publisher.notify( Publisher.events.buildModal, modalData );
   }

   sendFilterData = ( filter ) => {
       const data = this.model.filterData( filter );
       this.sendData( data );
       Publisher.notify( Publisher.events.readyFiltredData, data );
   }

   clickOnProduct = ( event ) => {
        const id = event.target.attributes['data-product-id'].value;
        Publisher.notify( Publisher.events.clickProduct, id);
    }

    clickOnProductCart = ( event ) => {
        const id = event.target.attributes['data-product-id'].value;
        const productCard = this.model.getModalData( id );
        Publisher.notify( Publisher.events.clickProductCart, productCard);
   }

   renderProdOnPage = ( count ) => {
        this.view.createList( this.data , count );
   }

   sendData = ( data ) => {
        this.data = data;
        Publisher.notify( Publisher.events.loadData, this.data );
        this.view.createList( this.data, { start: 0, end: 9 } );
   }

   sendDataByPrice = ( data ) => {
        this.data = data;
        Publisher.notify( Publisher.events.loadData, this.data );
        this.view.createList( this.data, { start: 0, end: 9 } );
   }

}