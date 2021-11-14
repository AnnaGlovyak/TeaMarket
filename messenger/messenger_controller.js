import Publisher from "../common/publisher.js";
import MessengerModel from "./messenger_model.js";
import MessengerView from "./messenger_view.js";

export default class MessengerController {

    constructor(){
        this.model = new MessengerModel();
        this.view = new MessengerView();
        Publisher.subscribe( Publisher.events.sendMessage, this.sendMessage );
    }

    sendMessage = ( data ) => {
        const msg = this.view.converData( data );
        this.model.sendMessege( msg );
    }
}