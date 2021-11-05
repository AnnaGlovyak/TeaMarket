import { tableSheetURL } from '../common/config.js'

export default class ProductsModel {

    loadData = async () => {
        const response = await fetch(tableSheetURL);
        const text = await response.text();

        this.data = this.parseTable(text);
        console.log(this.data)
        return this.data;
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