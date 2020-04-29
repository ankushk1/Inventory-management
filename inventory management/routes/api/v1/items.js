const express = require('express');
const router = express.Router();

const itemController = require('../../../controller/items_controller');


//routes
router.get('/', itemController.getAll);
router.post('/create', itemController.create);
router.delete('/:id', itemController.delete);
router.put('/:id/update', itemController.update);


module.exports = router;