const express = require('express');
const router = express.Router();

// Middleware.
const protect = require('../middleware/protect');

// Controllers.
const create = require('../controllers/recipes/create');
const getAll = require('../controllers/recipes/getAll');
const remove = require('../controllers/recipes/remove');
const update = require('../controllers/recipes/update');

// Attach all of the routes to the router.
// Here we bind an HTTP verb, a route, a controller and optionally any number of middlewares.
router.post('/', protect, create);
router.get('/', getAll);
router.delete('/:id', protect, remove);
router.put('/:id', protect, update);

module.exports = router;
