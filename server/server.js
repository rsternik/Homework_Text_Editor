//require for express
const express = require('express');

//creating app variable 
const app = express();

//declaring PORT numbers
const PORT = process.env.PORT || 3000;

//app.use for static/urlencoded/JSON data types
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require htmlRoutes
require('./routes/htmlRoutes')(app);

//app.listen for the PORT
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
