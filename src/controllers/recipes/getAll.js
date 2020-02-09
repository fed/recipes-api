const get = require('lodash/get');
const getAll = require('../../services/recipes/getAll');
const { SUCCESS, ERROR, SERVER_ERROR } = require('../../utils/messages');

/**
 * Method: GET
 * Endpoint: <ROOT_URL>/recipes
 */
module.exports = (request, response) => {
    getAll()
        .then(recipes => {
            const status = 200;

            response.status(status).send({
                meta: {
                    status,
                    message: SUCCESS
                },
                data: recipes
            });
        })
        .catch(error => {
            const status = get(error, 'status', 500);
            const message = get(error, 'message', SERVER_ERROR);

            response.status(status).send({
                meta: {
                    status,
                    message: ERROR
                },
                error: {
                    message
                }
            });
        });
};
