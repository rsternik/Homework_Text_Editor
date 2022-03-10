// Express
const express = require('express');
// Express App 
const app = express();
// Port Declaration
const PORT = process.env.PORT || 3000;
// App use
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// htmlRoutes
require('./routes/htmlRoutes')(app);
// Listen PORT
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
