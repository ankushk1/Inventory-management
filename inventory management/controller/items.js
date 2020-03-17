const Item = require('../models/items');

module.exports.index = async function (req, res) {

    let items = await Item.find({})

    return res.json(200, {
        items: items
    });

}

//create items
module.exports.create = async function (req, res) {
    try {

        let item = await Item.create({
            name: req.body.name,
            quantity: req.body.quantity
        });

        return res.json(200, {
            data: {
                item: item
            }
        })

    } catch (err) {
        console.log("error", err);
        return res.json(500, {
            message: "Internal server error"
        });
    }
}

//delete item by id
module.exports.destroy = async function (req, res) {
    try {
        let item = await Item.findById(req.params.id);
        item.remove();


        return res.json(200, {
            message: " Deleted"
        });

    } catch (err) {
        console.log("error", err);
        return res.json(500, {
            message: "Internal server error"
        });
    }

}



//update items by id
module.exports.update = function (req, res) {

    try {
        Item.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                quantity: req.params.number
            }
        }, function (err, item) {
            if (err) {
                console.log("Can't update");
            }
            return res.json(200, {
                data: {
                    item: item,
                },
                message: "Successfully updated"
            });

        });

    } catch (err) {
        console.log("Error", err);
        return res.json(500, {
            message: "Internal server error"
        });
    }

}