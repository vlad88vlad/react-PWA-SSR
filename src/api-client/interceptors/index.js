import request from './request';
import response from './response';

export default (client) => {
    request(client);
    response(client);
};
