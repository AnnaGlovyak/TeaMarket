import View from '../common/view.js'
import renderHistoryModal from '../common/render_history_modal.js'
import { getOrders } from '../common/getStorage.js';

export default class CartView extends View {

    cartDomElem = [
        {
            name: 'history',
            selector: '#history'
        },
        {
            name: 'historyItems',
            selector: '.history-items'
        }
    ]

    constructor () {
        super();
        this.linkDomElem( this.cartDomElem );
        this.history = getOrders();
        this.dom.history.addEventListener( 'click', ()=> this.openHistory() );
    }

    openHistory = (  ) => {
        
        this.history = getOrders();
        this.markup = '';
        
        this.history.map((el) => {
            let amount = 0;
            for (const key in el){
                this.modalHTML = renderHistoryModal(el[key]);
                this.markup += this.modalHTML;
                amount = el[key]["totalAmount"]
            }
          
            this.markup += `<div class="total-price total-history">$${amount}</div><br/>`
            this.dom.historyItems.innerHTML = this.markup;
        })
    }
}
