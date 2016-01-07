import {NotificationModel} from './notification-model';
import {UserModel} from '../user-service/user-model';

export var MOCK_NOTIFICATIONS : NotificationModel[] = [
    new NotificationModel(1,
        "Hablamos alemán?",
        new UserModel("Germanie", ["Spanish"], ["German"]),
        `Halo, hablamos alemán? Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`),
    new NotificationModel(2,
        "Hablamos francés?",
        new UserModel("Frenchie", ["Spanish"], ["French"]),
        `Salut, hablamos francés? Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`),
    new NotificationModel(3,
        "Hablamos italiano?",
        new UserModel("Italiani", ["Spanish"], ["Italian"]),
        `Ciao, hablamos italiano? Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`)
]
