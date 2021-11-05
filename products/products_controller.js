import ProductsModel from './products_model.js';
import ProductsView from './products_view.js';

export default class ProductController {

    constructor(){
        this.model = new ProductsModel();
        this.view = new ProductsView();
    }

   init = async () => {
       const data = await this.model.loadData();
       this.view.createList( data );
   }

}

