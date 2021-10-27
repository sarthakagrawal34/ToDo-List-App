//Requiring the Schema so as to access it
const Task = require('../models/taskSchema');

module.exports.create = function(req,res){
    // To create we use create function which create a json object in the database
    Task.create({
        desc: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err, newContact){
        if(err){
            console.log("error in creating a task");
            return;
        }
        console.log('******', newContact);
        //This willl redirect to the home page
        return res.redirect('back');
    });
}