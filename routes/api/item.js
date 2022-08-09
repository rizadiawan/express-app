const express = require('express');
const router = express.Router();
const {
     list
} = require('../../controllers/item');

// -------------------------CUSTOM ROUTE-------------------------
router.get('/',
    list
);

// -------------------------EXPORT ROUTER-------------------------
module.exports = router;