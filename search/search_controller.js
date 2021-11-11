import Publisher from '../common/publisher.js';
import SearchView from './search_view.js'

export default class SearchController {

    constructor(){
        this.view = new SearchView( this.changeSearch );
    }

    changeSearch = () => {
        const searchData = this.view.getSearchData();
        Publisher.notify( Publisher.events.changeSrchInp, searchData );
    }
}
