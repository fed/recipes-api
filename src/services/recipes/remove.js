const { Recipe } = require('../../models');

/**
 * Removes a recipe by its Id.
 * Note that services must always return a promise.
 * Reject the promise if any required value is missing.
 *
 * @param {number} id - Recipe Id. Required.
 * @return {Promise} - Promise value: Removed recipe.
 */
module.exports = id =>
    Recipe.findByPk(id).then(recipe => {
        if (!recipe) {
            return Promise.reject({
                status: 404,
                message: 'There is no recipe with the `id` provided.'
            });
        }

        return recipe.destroy();
    });
