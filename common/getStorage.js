const allStorage = () => {

    let values = [],
        keys = Object.keys( localStorage ),
        i = keys.length;
    const reg = /^product-id/;

    while ( i-- ) {
        if ( reg.test( keys[i] ) ) {
            values.push( JSON.parse( localStorage.getItem( keys[i] ) ));
        }
    }
    const total = localStorage.getItem( 'priceTotal' );
    return { values, total };
}

export function getOrders () {
    
    let orders = [],
        keys = Object.keys( localStorage ),
        i = keys.length;
    const reg = /^order/;
    
    while ( i-- ) {
        if ( reg.test( keys[i] ) ) {
            orders.push( JSON.parse( localStorage.getItem( keys[i] ) ));
        }
    }
    
    return orders;
}

export default allStorage;