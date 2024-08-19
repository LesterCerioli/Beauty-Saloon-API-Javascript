const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const appointmentRoutes = require('./routes/appoiuntmentRoutes');
const saloonRoutes = require('./routes/saloonRoutes');
const attendantRoutes = require('./routes/attendantRoutes');


const app = express();
app.use(bodyParser.json());

// Routes
app.use('./api/v1/customers', customerRoutes);
app.use('./api/v1/appointments', appointmentRoutes);
app.use('./api/v1/attendants', attendantRoutes);
app.use('./api/v1/saloons', saloonRoutes);


app.get('/', (req, res) =>{
    res.send('Welcome to Beauty Saloon API');
});

module.exports = app;

