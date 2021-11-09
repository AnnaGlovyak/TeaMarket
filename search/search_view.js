import View from '../common/view.js'

export default class SearchView extends View{

    domElem = [
        {
            name: 'searchInput',
            selector: '#search-input-id'
        }
    ];
    constructor( changeSearch ){
        super();
        this.linkDomElem( this.domElem );
        this.dom.searchInput.addEventListener('change', changeSearch);
    }

    getSearchData() {
        return this.dom.searchInput.value;
    }

    setSearchData() {
        this.dom.searchInput.value = '';
    }
    
}