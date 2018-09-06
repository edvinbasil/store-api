const express = require('express')
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//Sets up middelware
app.use(morgan('dev'));
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Error Handling for routes
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 400;
    next(error);
});

//Error Handling for other internal errors
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;