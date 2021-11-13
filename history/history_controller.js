import HistoryView from './history_view.js';
import Publisher from '../common/publisher.js'
import { getOrders } from '../common/getStorage.js';

export default class CartController {

    constructor(){
        this.view = new HistoryView();
        Publisher.subscribe( Publisher.events.clickHistory, this.openHistory );
        Publisher.subscribe( Publisher.events.loadData, this.loadHistory );
    }
    
    openHistory = () => {
        this.view.openHistory();
    }
    
    loadHistory = () => {
        this.view.loadHistory();
    }
}
