// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

//Requiring the home_controller
const homeController = require('../controllers/home_controller');

//Requiring the create_controller
// const createController = require('../controllers/create_controller');

//To test that whether the file is loaded
console.log("Home Router loaded");

//To access the home controller action which render the ejs file on the browser fetching from the database
router.get('/', homeController.home);

//To access the create controller action
router.post('/create-task', homeController.create);

//To access the delete controller action
router.post('/delete-task', homeController.delete);

//For any further routes, access from here
    //router.use('/routerName', require('./routerFile'));


//Exporting the module
module.exports = router;

