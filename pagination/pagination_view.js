export default class PagiantionView {
    
    constructor( clickPagination ){
        this.pagination_wrap = document.querySelector('.pagination');
        this.current_page = 1;
        this.rows = 6;
        this.clickPagination = clickPagination;
    }

    clickOnPagBut = ( event ) => {
        console.log ( event.target.innerText )
        this.current_page = +event.target.innerText;

        const count = {};
        count.start = this.rows * (this.current_page - 1);
        count.end = count.start + this.rows;

        // let current_btn = document.querySelector('.pagenumbers button.active');
        // current_btn.classList.remove('active');
        // button.classList.add('active');

        return count;        
    }

    setupPagination = ( length ) => {
        this.pagination_wrap.innerHTML = '';
        let page_count = Math.ceil( length / this.rows );

        for (let i = 1; i < page_count + 1; i++) {
            let button = document.createElement('button');
            button.innerText = i;
            if (this.current_page == i) button.classList.add('active');
            button.addEventListener('click', this.clickPagination);
            this.pagination_wrap.append( button );
        }
    }    
}