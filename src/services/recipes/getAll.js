const { Recipe } = require('../../models');

/**
 * Retrieve all recipes.
 * Note that services must always return a promise.
 *
 * @return {Promise} - Promise value: Array of recipes.
 */
module.exports = () =>
    Recipe.findAll({
        order: [['id', 'ASC']]
    });
