const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    type:   {type: String, require: true},
    model:  {type: String, require: true},
    qty:    {type: Number, require: true},
    img:    {type: String, require: true},
    price:  {type: Number, require: true},
    item:   {type: String, require: true}
})

const ShoppingCart = mongoose.model("ShoppingCart", cartSchema)

module.exports = ShoppingCart;