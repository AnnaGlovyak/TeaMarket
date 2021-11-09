import Publisher from "../common/publisher.js";
import FilterView from "./filter_view.js";

export default class FilterController{

    constructor(){
        this.view = new FilterView( this.changeCategory);
    }

    init(){
    }

    changeCategory(event){
            const filter = {
                name: event.target.className,
                value: event.target.attributes['data-value'].value
            }
            
            Publisher.notify( Publisher.events.clickCategFiltr, filter );
            return filter;
        }
    }