const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;

app.use(express.static('public'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Will be home Directory
app.get('/api/v1/', (req, res) => {
    res.send("Lets Play Some Tunes")
});

// Index of all instruments
app.get('/api/v1/music', (req, res) => {
    res.render('Index')
});

// Index of all instruments
app.get('/api/v1/music/:instrument', (req, res) => {
    res.send(`This is Instrument Type`)
    // res.render('ShowCategory')
});

app.listen(port, () => {
    console.log(`I am listening on port: ${port}`)
});