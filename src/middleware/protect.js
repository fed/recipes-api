const jwt = require('jsonwebtoken');
const { getTokenFromRequest } = require('../utils/helpers');
const { AUTH_ERROR, AUTH_INVALID_TOKEN } = require('../utils/messages');

module.exports = (request, response, next) => {
    const token = getTokenFromRequest(request);

    if (!token) {
        return response.status(401).send({
            meta: {
                status: 401,
                message: AUTH_ERROR
            },
            error: {
                message: AUTH_INVALID_TOKEN
            }
        });
    }

    // Make sure token is valid
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        // Nope!
        if (error) {
            return response.status(401).send({
                meta: {
                    status: 401,
                    message: AUTH_ERROR
                },
                error: {
                    message: AUTH_INVALID_TOKEN
                }
            });
        }

        request.decoded = decoded;
        next();
    });
};
