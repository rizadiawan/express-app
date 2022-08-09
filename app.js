// Taken from https://dev.to/julfikarhaidar/rest-apis-example-with-sequelize-orm-with-node-js-and-express-p40

const express = require('express');
const bodyParser = require('body-parser');

// uncomment here to intentionally create bug

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routing
const api = require('./routes/api');
app.use('/api', api);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});