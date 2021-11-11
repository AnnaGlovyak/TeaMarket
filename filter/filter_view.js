import View from "../common/view.js";

export default class FilterView extends View{

    constructor ( changeCategory, priceRangeOnChange ) {
        super();
        this.categories = document.querySelectorAll( '.category' );
        this.categories.forEach( el => el.addEventListener( 'click', changeCategory ) );

        this.priceRangeOnChange = priceRangeOnChange;
        this.price = document.querySelector('.filter-price');
        this.price.addEventListener('change', this.priceRangeOnChange);

    }

    memberData = ( data ) => {
        this.data = [];
        data.forEach( cur => this.data.push(cur));
        return this.data;
    }

    sortByPrice = ( data ) => {
        data.sort( (a, b) => a.price - b.price );
        return data;
    }

    setMinMaxPrice = ( data ) => {
        this.minPrice = data[0].price;
        this.maxPrice = data[data.length - 1].price;
        this.price.setAttribute( 'min', this.minPrice );
        this.price.setAttribute( 'max', this.maxPrice );
    }

    sliceDataByPriceRange = () => {
        const maxValue = this.price.value;
        this.price.setAttribute( 'title', maxValue );
        const lastProductInSort = this.data.findIndex( el => +el.price >= +maxValue);
        return this.data.slice( lastProductInSort, this.data.length )
    }

}