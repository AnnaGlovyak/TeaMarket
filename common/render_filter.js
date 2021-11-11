export default function renderFilter( data ) {
    if ( data.category === 'coffee') {
         data.types =  data.roast;
    }

    return `<div class="form-group">
                <label>Package</label>
                <select class="form-control filter-package">
                    <option selected value="1">Loose Tea</option>
                    <option value="2">Compressed Tea</option>
                    <option value="3">Tea Bags</option>
                </select>
            </div>
            <div class="form-group">
                <label>Region</label>
                <select class="form-control filter-region">
                    <option selected value="1">China</option>
                    <option value="2">Japan</option>
                    <option value="3">Africa</option>
                    <option value="4">India</option>
                    <option value="5">Nepali</option>
                </select>
            </div>
            <div class="form-group">
                <label>Type</label>
                <select class="form-control filter-type">
                    <option selected value="1">Shen Puer</option>
                    <option value="2">Sur Puer</option>
                    <option value="3">Matcha</option>
                    <option value="4">Heicha</option>
                    <option value="5">Gaba</option>
                    <option value="6">Oolong</option>
                </select>
            </div>
            <div class="form-group">
                <label>Manufacturer</label>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Chiyabari Tea Estate
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Flowery Orange Pekoe
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Rajmai Tea Company of Assam
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Zhejiang Tea
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                    Fujian Tea
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Japanese Bancha
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                    Nandi Highlands
                </label>
                </div>
            </div>`;
}