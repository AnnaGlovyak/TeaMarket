import View from "../common/view.js";

export default class FilterView extends View{

    constructor( changeCategory ){
        super();
        this.categories = document.querySelectorAll('.category');
        this.categories.forEach( el => el.addEventListener('click', changeCategory));
    }
}