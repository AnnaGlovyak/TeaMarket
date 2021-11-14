import { shopName, telegChatId, telegToken, telegramUrl } from '../common/config.js'

export default class MessengerModel {

    sendMessege = ( msg ) => {
        const messega = encodeURIComponent( msg );
        const req = `${ telegramUrl }${ telegToken }/sendMessage?chat_id=${ telegChatId }&parse_mode=html&text=${ messega }`;
        fetch(req);
    }
}