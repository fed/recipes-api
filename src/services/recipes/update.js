const { Recipe } = require('../../models');

/**
 * Update an existing recipe.
 * Note that services must always return a promise.
 * Reject the promise if any required value is missing.
 *
 * @param {number} id - Recipe Id. Required.
 * @param {string} title - Recipe title. Required.
 * @param {string} description - Recipe description. Required.
 * @param {string} imageUrl - Recipe image URL.
 * @param {string} sourceUrl - Recipe source URL.
 * @return {Promise} - Promise value: Updated recipe.
 */
module.exports = (id, title, description, imageUrl, sourceUrl) => {
    if (!title) {
        return Promise.reject({
            status: 400,
            message: 'Please make sure to provide a valid new `title`.'
        });
    }

    if (!description) {
        return Promise.reject({
            status: 400,
            message: 'Please make sure to provide a valid new `description`.'
        });
    }

    return Recipe.findByPk(id).then(recipe => {
        if (!recipe) {
            return Promise.reject({
                status: 404,
                message: 'The recipe you are trying to update does not exist.'
            });
        }

        return recipe.update({
            title,
            description,
            image_url: imageUrl,
            source_url: sourceUrl
        });
    });
};
