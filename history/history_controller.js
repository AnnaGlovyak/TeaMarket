import HistoryView from './history_view.js';
import Publisher from '../common/publisher.js'

export default class CartController {

    constructor(){
        this.view = new HistoryView();
        Publisher.subscribe( Publisher.events.clickHistory, this.openHistory );
    }
    
    openHistory = () => {
        this.view.openHistory();
    }

}
