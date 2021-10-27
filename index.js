// Requiring the express server in the main server
const express = require('express');

//Firing the express server
const app = express();

//Define the port on which the server will be run
const port = 8000;

// The bodyParser object exposes various factories to create middlewares. as variable
//  To get access to the post data we have to use body-parser
var bodyParser = require('body-parser');

//Requiring the ejs layout library
const expressLayouts = require('express-ejs-layouts');

// require mongoose for connection to the server
const db= require('./config/mongoose');

// express.urlencoded() function is a built-in middleware function in Express to read the post request
app.use(express.urlencoded());
// accessing the static files
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));

//extracting styles and scripts from subpages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Use the ejs layout before the routes
app.use(expressLayouts);

// Use express routes  which contains the library of our routes
app.use('/', require('./routes/indexRoute')); // or app.use('/', require('./routes/indexRoute'));

//Set the view engine as ejs that is embedded javascript
app.set('view engine', 'ejs');

//Set the path for views folder
app.set('views', './views');



// To bind and listen the connections on the specified host and port.
app.listen(port, function(err){
    if(err){
        // console.log('Error in running the server: ', err);

        //using interpolation symbol(``). It is the process of embedding an expression into part of a string.
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is listening on port: ${port}`);
});