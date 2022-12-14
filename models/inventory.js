// Require Mongoose
const mongoose = require('mongoose');

// Instrument Schema
const instrumentSchema = new mongoose.Schema({
    type:   {type: String, require: true},
    model:  {type: String, require: true},
    qty:    {type: Number, require: true},
    img:    {type: String, require: true},
    price:  {type: Number, require: false}
})

const Inventory = mongoose.model("Inventory", instrumentSchema)

module.exports = Inventory;