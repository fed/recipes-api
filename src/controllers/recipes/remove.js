const get = require('lodash/get');
const remove = require('../../services/recipes/remove');
const { SUCCESS, ERROR, SERVER_ERROR } = require('../../utils/messages');

/**
 * Method: DELETE
 * Endpoint: <ROOT_URL>/recipes/:id
 * This is a protected route.
 *
 * @param {number} request.params.id
 */
module.exports = (request, response) => {
    const id = request.params.id;

    remove(id)
        .then(recipe => {
            const status = 200;

            response.status(status).send({
                meta: {
                    status,
                    message: SUCCESS
                },
                data: recipe
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
