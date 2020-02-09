const get = require('lodash/get');
const create = require('../../services/recipes/create');
const { SUCCESS, ERROR, SERVER_ERROR } = require('../../utils/messages');

/**
 * Method: POST
 * Endpoint: <ROOT_URL>/recipes
 * This is a protected route.
 *
 * @param {string} request.body.title
 * @param {string} request.body.description
 * @param {string} request.body.image_url
 * @param {string} request.body.source_url
 */
module.exports = (request, response) => {
    const { title, description, image_url, source_url } = request.body;

    create(title, description, image_url, source_url)
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
