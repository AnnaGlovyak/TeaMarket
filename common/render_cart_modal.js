export default function renderCartModal( data ) {

    const total = data.total;
    const values = data.values;
    const totalHtml = document.getElementById( 'total' );

    totalHtml.innerHTML = `$${ total }`

    return `<div class="item row justify-content-around">
                <div class="buttons col-1 align-self-center">
                    <span class="delete-btn"><i class="fas fa-times"></i></span>
                </div>

                <div class="image col-3 align-self-center">
                    <img class="picture" src=${ values.image } alt="image" />
                </div>

                <div class="description col-4 align-self-center">
                    <span style="text-decoration: underline;">${ values.name }</span>
                    <span>${ values.manufactures }</span>
                    <span style="opacity: 0.8;">${ values.package }</span>
                    <span style="margin-top: -3px;">${ values.weight } g</span>
                </div>

                <div class="quantity col-2 align-self-center">
                    <button class="plus-btn" type="button" name="button">
                        <i class="fas fa-plus"></i>
                    </button>
                    <input type="text" name="name" value="${ values.qty }" />
                    <button class="minus-btn" type="button" name="button">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>

                <div class="total-price col-2 align-self-center">$${ values.price }</div>
            </div>`;
}