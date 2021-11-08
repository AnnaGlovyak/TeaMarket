export default class View{
    linkDomElem () {
        this.dom = this.domElements.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {})
    }
}