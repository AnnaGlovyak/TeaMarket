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
        },
        {
            name: 'tea0',
            selector: '#tea-0'
        },
        {
            name: 'tea1',
            selector: '#tea-1'
        },
        {
            name: 'tea2',
            selector: '#tea-2'
        },
        {
            name: 'tea3',
            selector: '#tea-3'
        },
        {
            name: 'cof0',
            selector: '#cof-0'
        },
        {
            name: 'cof1',
            selector: '#cof-1'
        },
        {
            name: 'cof2',
            selector: '#cof-2'
        },
        {
            name: 'cof3',
            selector: '#cof-3'
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
        const firstProductInSort = this.data.findIndex( el => +el.price >= +mimValue );
        return this.data.slice( firstProductInSort, this.data.length );
    }

    toggleNavBar = () => {
        this.dom.navbarContent = document.querySelector('.navbar-content');
        this.dom.navbarContent.classList.toggle('navbar-active');
    }

    changeCategoryColor = (event) => {
        
        const arr = [ this.dom.tea0, this.dom.tea1, this.dom.tea2, this.dom.tea3, this.dom.cof0, this.dom.cof1, this.dom.cof2, this.dom.cof3 ];
        
        arr.forEach(el => el.style = "color: inherit")

        event.path[0].style = "color: #fc5959";
    }

}