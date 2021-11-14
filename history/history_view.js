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

    openHistory = () => {
        
        this.history = getOrders();
        this.markup = '';
        this.history.forEach((el) => {

            let amount = 0;
            let name = '';
            let phone = '';
            let date = '';
            let orderNum = '';

            for (const key in el){
                
                this.modalHTML = renderHistoryModal(el[key]);
                this.markup += this.modalHTML;
                amount = el[key]["totalAmount"]
                name = el[key]["customName"]
                phone = el[key]["customPhone"]
                date = el[key]["time"]
                orderNum = el[key]["orderId"]
            }

            this.markup += `<div class="customer-details" >Order#${orderNum}. ${name} <span class="customer-details-span"> ${phone} </span> ${date}<span class="total-price total-history">$${amount}</span></div><br/>`
            this.dom.historyItems.innerHTML = this.markup;

        })

    }

}
