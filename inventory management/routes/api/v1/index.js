const express = require('express');

const router = express.Router();


router.use('/items', require('./items'));


//export
module.exports = router;