import axios from 'axios';


export default (client) => {
    client.interceptors.response.use(
        (response) => Promise.resolve(response),
        (error) => {
            if (!error.response) {
                if (axios.isCancel(error)) {
                    /* eslint-disable-next-line no-console */
                    console.log(error && error.message);
                } else {
                    /* eslint-disable-next-line no-console */
                    console.log('connection is low', error);
                }
            } else if (error.response.status === 401) {
                /* eslint-disable-next-line no-console */
                console.log('Logout:', error);
            } else {
                // todo parse error
                const parsedError = (error.response.headers && error.response.headers['content-type'].includes('application/json'))
                    ? 'Parsed error'
                    : 'Unexpected error';

                /* eslint-disable-next-line no-console */
                console.log(parsedError);
            }

            return Promise.reject(error);
        },
    );
};
