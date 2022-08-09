const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
    type:   {type: String, require: true},
    model:  {type: String, require: true},
    type:   {type: String, require: true},
    qty:    {type: Number, require: true},
    img:    {type: String, require: true}
})

const Inventory = mongoose.model("Inventory", instrumentSchema)

module.exports = Inventory;