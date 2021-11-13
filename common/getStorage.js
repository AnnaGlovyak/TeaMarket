const allStorage = () => {

    var values = [],
        keys = Object.keys( localStorage ),
        i = keys.length;

    while ( i-- ) {
        if ( keys[i] !== 'priceTotal' ) {
            values.push( JSON.parse( localStorage.getItem( keys[i] ) ));
        }
    }
    const total = localStorage.getItem( 'priceTotal' );
    return { values, total };
}
export default allStorage;