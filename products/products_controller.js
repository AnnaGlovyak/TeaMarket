import ProductsModel from './products_model.js';
import ProductsView from './products_view.js';

export default class ProductController {

    constructor(){
        this.model = new ProductsModel();
        this.view = new ProductsView(this.changeSearch, this.openModal);
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

   openModal = async (event) => {
        const id = this.view.getProductId(event);
        const modalData = await this.model.getModalData( id )
        this.view.createModal( modalData );
        console.log(id)
   }

}

