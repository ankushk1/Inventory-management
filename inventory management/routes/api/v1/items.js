const express = require('express');
const router = express.Router();

const api = require('../../../controller/items');


//crud
router.get('/', api.index);
router.post('/create', api.create);
router.delete('/:id', api.destroy);
router.post('/:id/update', api.update);


module.exports = router;