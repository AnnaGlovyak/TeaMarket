export default class Publisher{

    static listeners = {}

    static set listener(name){
        if(!this.listeners[name]){
            this.listeners[name] = [];
        }
    }
    
    static subscribe(name, listener){
        this.listener = name;
        this.listeners[name].push(listener);
    }

    static unsubscribe(name, listener){
        this.listener = name;
        this.listeners[name] = this.listeners[name].filter(cb => cb != listener);
    }

    static notify(name, data){
        this.listener = name;
        this.listeners[name].forEach(listener => listener(data));
    }

    static events = {
        clickProduct: 'CLICK ON PRODUCT',
        buildModal: 'BUILD MODAL',
        changeSrchInp: 'CHANGE SEARCH INPUT',
        clickCategFiltr: 'CLICK ON CATEGORY',
        clickPagBtn: 'CLICK ON PAGGINATION BUTTON',
        renderProdOnPage: 'RENDER PRODUCTS ON CURRENT PAGE',
        loadData: 'LOAD DATA',
        clickProductCart: 'CLICK ON PRODUCT CART',
        priceRangeChng: 'PRICE RANGE ON CHANGE',
        readyFiltredData: 'FILTRED DATA IS READY',
        clickCart: 'CLICK ON CART',
        buildCart: 'BUILD MODAL CART',
        clickHistory: 'CLICK ON HISTORY',
        buildHistory: 'BUILD MODAL HISTORY',
    }

}