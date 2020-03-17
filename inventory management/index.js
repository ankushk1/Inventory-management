const express = require('express');
const app = express();
const port = 8002;
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
app.use(express.urlencoded());


app.use(expressLayouts);
// setting views
app.set('view engine', 'ejs');
app.set('views', './views');

//routes
app.use('/', require('./routes'));



app.listen(port, function (err) {
    if (err) {
        console.log(`Error: ${err}`);
    }

    console.log(`Server is running on: ${port}`);
});