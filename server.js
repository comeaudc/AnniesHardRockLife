const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;

app.get('/', )

app.listen(port, () => {
    console.log(`I am listening on port:${port}`)
});