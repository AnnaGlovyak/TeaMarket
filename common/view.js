export default class View{

    linkDomElem ( domElements ) {
        this.dom = domElements.reduce((acc, cur) => {
            acc[cur.name] = document.querySelector(cur.selector);
            return acc;
        }, {})
    }
}