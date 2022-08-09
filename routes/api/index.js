const router = require('express').Router();

router.use('/items', require('./item'));

module.exports = router;