import { shopName } from '../common/config.js'

export default class MessengerView {

    converData = ( data ) => {
        const prodHTML = this.parseProducts( data.products );
        const msg = 
`
Hi, <b>${ data.customName }</b>!
Thank you for your order in "${ shopName }" shop. \n
<b>Order details:</b>
${ prodHTML }
Date: ${ data.time }
-----------
Total: <b>${ data.total } $</b>\n
`;
        return msg;
    }

    parseProducts = ( products ) => {
        let productsHTML = '';
        products.forEach( prod => {
            productsHTML += `<u>${ prod.name }:</u> ${ prod.price } $,\n`
        });
        return productsHTML;
    }
}