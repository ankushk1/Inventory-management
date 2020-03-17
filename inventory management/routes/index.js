const express = require('express');
const router = express.Router();

//require api
router.use('/api', require('./api'));


//export
module.exports = router;