const Item = require('../models').Item;

module.exports = {
    // get all items

    list: ( req, res ) => {

        Item.findAll( {
            limit: 10,
            order: [['id', 'DESC']]
        }).then(items => {
            return res.status(200).json({
                items
            });
        }).catch(err => {
            return res.status(400).json({err});
        });
    }
};