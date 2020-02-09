const { Recipe } = require('../../models');

/**
 * Create a new recipe.
 * Note that services must always return a promise.
 * Reject the promise if any required value is missing.
 *
 * @param {string} title - Recipe title. Required.
 * @param {string} description - Recipe description. Required.
 * @param {string} imageUrl - Recipe image URL.
 * @param {string} souceUrl - Recipe source URL.
 * @return {Promise} - Promise value: Created recipe.
 */
module.exports = (title, description, imageUrl, sourceUrl) => {
    if (!title) {
        return Promise.reject({
            status: 400,
            message: 'Please make sure to provide a valid `title`.'
        });
    }

    if (!description) {
        return Promise.reject({
            status: 400,
            message: 'Please make sure to provide a valid `description`.'
        });
    }

    return Recipe.create({
        title,
        description,
        image_url: imageUrl,
        source_url: sourceUrl
    });
};
