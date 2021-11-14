import View from "../common/view.js";

export default class FilterView extends View{

    domElem = [
        {
            name: 'price',
            selector: '.filter-price'
        },
        {
            name: 'filterMinPrice',
            selector: '.filter-price-min'
        },
        {
            name: 'btnSort',
            selector: '.btn-filter-sort'
        },
        {
            name: 'navBarBtn',
            selector: '.navbar-toggler'
        }
    ]

    constructor ( changeCategory, priceRangeOnChange ) {
        super();
        this.linkDomElem( this.domElem );
        this.priceRangeOnChange = priceRangeOnChange;

        this.categories = document.querySelectorAll( '.category' );
        this.categories.forEach( el => el.addEventListener( 'click', changeCategory ) );

        this.dom.price.addEventListener( 'change', this.priceRangeOnChange );
        this.dom.btnSort.addEventListener( 'click', this.priceRangeOnChange );

        this.dom.navBarBtn.addEventListener('click', this.toggleNavBar)
    }

    memberData = ( data ) => {
        this.data = [];
        data.forEach( cur => this.data.push(cur) );
        return this.data;
    }

    sortByPrice = ( data ) => {
        data.sort( (a, b) => a.price - b.price );
        return data;
    }

    setMinMaxPrice = ( data ) => {
        const minPrice = data[0].price;
        const maxPrice = data[data.length - 1].price;
        this.dom.price.setAttribute( 'min', minPrice );
        this.dom.price.setAttribute( 'max', maxPrice );

        this.dom.filterMinPrice.innerText = minPrice;
        this.dom.price.value = minPrice;
        this.dom.price.setAttribute( 'title', minPrice );
    }

    sliceDataByPriceRange = () => {
        const mimValue = this.dom.price.value;
        this.dom.filterMinPrice.innerText = mimValue;
        this.dom.price.setAttribute( 'title', mimValue );
        const lastProductInSort = this.data.findIndex( el => +el.price >= +mimValue );
        return this.data.slice( lastProductInSort, this.data.length );
    }

    toggleNavBar = () => {
        this.dom.navbarContent = document.querySelector('.navbar-content');
        this.dom.navbarContent.classList.toggle('navbar-active');
    }

}