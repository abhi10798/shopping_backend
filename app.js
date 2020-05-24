const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors');






/* CORS */
app.use(cors(
    {
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
const usersRouter = require('./routes/orders');
const productsRouter = require('./routes/products');
const orderRouter = require('./routes/orders');

//Use Routes
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', orderRouter);




module.exports = app;
