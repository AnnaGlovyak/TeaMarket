import { tableSheetURL } from '../common/config.js'

export default class ProductsModel {

    loadData = async () => {
        const response = await fetch(tableSheetURL);
        const text = await response.text();
        this.data = this.parseTable(text);
        return this.data;
    }

    dataBySearch = ( searchData ) => {
        const search = searchData.toLocaleLowerCase();

        if ( !search.trim() === '') {  
            return this.data;
        } else {
            const products = this.data.filter( product => {
                const dataToCheck = Object.values( product ).map( val =>  val.toLocaleLowerCase() );
                return dataToCheck.filter( el => el.includes( search ) ).length !== 0;
                })
            return products;
        }
    } 

    getModalData = ( id ) => {
        return this.data.filter( el => el.id === id )[0];
    }

    parseTable = ( text ) => {
        const rows = text.split( /\r\n/ );
        const table = rows.map( row => row.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/) );
        const names = table.shift();
        const data = table.map( r => r.reduce( (acc, val, i) => {
            if ( val ) {
                acc[names[i]] = val;
            }
            return acc; 
            }, {})
            );
        return data;
    }

    filterData = ( { name, value } ) => {
        return this.data.filter( el => el[name] == value);
    }
}