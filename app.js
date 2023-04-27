const 
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    app = express();

//router

//default dari express-generator
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// end

const categoriesRouter = require('./app/api/v1/categories/router');
const v1 = '/api/v1/cms';

const 
    notFoundMiddleware = require('./app/middleware/not-found'),
    handleErrorMidleware = require('./app/middleware/handler-error');
const errorHandlerMiddleware = require('./app/middleware/handler-error');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Custom
app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Welcome to API Tiketing'
    })
})

app.use(v1, categoriesRouter);
app.use(notFoundMiddleware);
app.use(handleErrorMidleware);

module.exports = app;
