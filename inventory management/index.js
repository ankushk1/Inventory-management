const express = require('express');
const app = express();
const port = 8002;
const db = require('./config/mongoose');

app.use(express.urlencoded());

//routes
app.use('/', require('./routes'));


//port
app.listen(port, function (err) {
    if (err) {
        console.log('Error in connection');
    }

    console.log(`Server is running on: ${port}`);
});