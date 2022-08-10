const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;
const Inventory = require('./models/inventory');
const mongoose = require('mongoose');
const inventoryData = require('./utilities/inventoryData');
const methodOverride = require('method-override');

//DB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log("connected to mongo")
});

//Middleware
app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
});
app.use(methodOverride('_method'));
//Tells Express to use middleware
app.use(express.urlencoded({extended: false}))

//Connects to public folder for CSS use
app.use(express.static('public'));

//Setting up views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Will be home Directory
app.get('/api/v1/', (req, res) => {
    res.render("Home")
});

//Seed Route
// app.get('/api/v1/music/seed', (req, res) => {
//     Inventory.create(inventoryData);
//     res.redirect("/api/v1/music")
// });

// Index of all instruments
app.get('/api/v1/music', (req, res) => {
    Inventory.find({}, (err, allInventory) => {
        res.render('Index', {
            inventory: allInventory //Must be same as in Index.jsx @ <same as inventory> = this. props
        })
    })
});

//Create new instrument
app.get('/api/v1/music/new', (req, res) => {
    res.render('New')
});
//Create new post route
app.post('/api/v1/music/', (req, res) => {
    Inventory.create(req.body, (err, createdInstrument) => {
        res.redirect('/api/v1/music')
    });
});

// Index of all instruments of type
app.get('/api/v1/music/:type', (req, res) => {
    Inventory.find({type: req.params.type}, (err, foundInventory) => {
        res.render('ShowCategory', {
            inventory: foundInventory
        })
    })
});

//Shows Specific Model info
app.get('/api/v1/music/:type/:model', (req, res) => {
    Inventory.findById(req.params.model, (err, foundInventory) => {
        res.render('Show', {
            instrument: foundInventory
        });
    });
});

//Delete Route
app.delete("/api/v1/music/:type/:id", (req, res) =>{
    Inventory.findByIdAndRemove(req.params.id, (err,data) =>{
        res.redirect("/api/v1/music")
    });
});

//Edits Specific Model info
app.get('/api/v1/music/:type/:model/edit', (req, res) => {
    Inventory.findById(req.params.model, (err, foundInventory) =>{
        if(!err) {
            res.render("Edit", {
                instrument: foundInventory,
            });
        } else {
            res.send({
                msg: err.message
            });
        };
    });
});

//Update Info in Database
app.put('/api/v1/music/:type/:model', (req, res) => {
    Inventory.findByIdAndUpdate(
        req.params.model,
        req.body,
        {
            new: true,
        },
        (err, updatedInstrument) => {
            res.redirect(`/api/v1/music/${req.body.type}/${req.params.model}`)
        }
    );
});

app.listen(port, () => {
    console.log(`I am listening on port: ${port}`)
});