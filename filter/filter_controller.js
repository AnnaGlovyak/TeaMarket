import Publisher from "../common/publisher.js";
import FilterView from "./filter_view.js";

export default class FilterController{

    constructor(){
        this.view = new FilterView( this.changeCategory, this.priceRangeOnChange );
        Publisher.subscribe( Publisher.events.loadData, this.setMinMaxPrice);
        Publisher.subscribe( Publisher.events.readyFiltredData, this.getFiltredData)
    }
    
    changeCategory =( event ) =>{
        const filter = {
            name: event.target.className,
            value: event.target.attributes['data-value'].value
        }

        this.view.changeCategoryColor( event );

        Publisher.notify( Publisher.events.clickCategFiltr, filter );
        return filter;
    }

    getFiltredData = ( data ) => {
        this.data = data;
        this.setMinMaxPrice( this.data );
    }

    setMinMaxPrice = ( data ) => {
        const dataForSort = this.view.memberData( data );
        const products = this.view.sortByPrice( dataForSort );
        this.view.setMinMaxPrice( products );
        Publisher.unsubscribe(Publisher.events.loadData, this.setMinMaxPrice);
    }

    priceRangeOnChange = () => {
        const data = this.view.sliceDataByPriceRange();
        Publisher.notify( Publisher.events.priceRangeChng, data );
    }

}