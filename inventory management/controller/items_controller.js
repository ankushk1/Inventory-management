const Item = require('../models/items');


//Get all items
module.exports.getAll = async function (req, res) {
    try {
        let items = await Item.find({})

        return res.json(200, {
            items: items
        });
    } catch (err) {
        console.log("error", err);
        return res.json(500, {
            message: "Internal server error"
        });
    }

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
module.exports.delete = async function (req, res) {
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
module.exports.update = async function (req, res) {

    try {
        await Item.findByIdAndUpdate(req.params.id, {
            quantity: req.body.quantity
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