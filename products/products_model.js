import { tableSheetURL } from '../common/config.js'

export default class ProductsModel {

    loadData = async () => {
        const response = await fetch(tableSheetURL);
        const text = await response.text();
        const data = this.parseTable(text);
        return data;
    }

    getData = async ( searchData = '' ) => {
        const search = searchData.toLocaleLowerCase();

        if ( !search.trim() === '') {  
            this.data = await this.loadData();
        } else {
            const products = await this.loadData();
            this.data = products.filter(product => {
                let dataToCheck = Object.values(product).map( val =>  val.toLocaleLowerCase());
                return dataToCheck.filter( el => el.includes(search)).length !== 0;
            })
        }
        return this.data;
    } 

    getModalData = async ( id ) => {
        return this.data.filter(el => el.id === id)[0];
    }

    parseTable = ( text ) => {
        const rows = text.split(/\r\n/);
        const table = rows.map( row => row.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/));
        const names = table.shift();
        const data = table.map(r => r.reduce((acc, val, i) => {
            if(val) {
                acc[names[i]] = val;
            }
            return acc; 
            }, {})
            );
        return data;
    }
}