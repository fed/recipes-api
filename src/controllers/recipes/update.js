const get = require('lodash/get');
const update = require('../../services/recipes/update');
const { SUCCESS, ERROR, SERVER_ERROR } = require('../../utils/messages');

/**
 * Method: PUT
 * Endpoint: <ROOT_URL>/recipes/:id
 * This is a protected route.
 *
 * @param {number} request.params.id
 * @param {string} request.body.title
 * @param {string} request.body.description
 * @param {string} request.body.image_url
 * @param {string} request.body.source_url
 */
module.exports = (request, response) => {
    const id = request.params.id;
    const { title, description, image_url, source_url } = request.body;

    update(id, title, description, image_url, source_url)
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
