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
        searchFromInput: 'SEARCH FROM INPUT',
        clickCategFiltr: 'CLICK ON CATEGORY'
    }

}