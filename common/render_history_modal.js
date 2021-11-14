export default function renderHistoryModal( ...data ) {

    return `<div class="item row justify-content-around render-history-modal">
                <div class="description col-7 align-self-center">
                    <span style="text-decoration: underline;">${ data[0].name }, ${ data[0].weight }g</span>
                </div>

                <div class="col-2 align-self-center">
                    ${ data[0].qty }x$${ data[0].price }
                </div>

                <div class="col-1 align-self-center float-right">$${ data[0].price*data[0].qty }</div>
            </div>`;
}
