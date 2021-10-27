// accesing the task Schema through router
const Task=require('../models/taskSchema');

//Exporting module to browser when the route request this controller
// Function of this home is to show the home page of todo app
module.exports.home=function(req,res)
{
    // res.end('<h1>Express is up for Todo App!</h1>');

    //using database to fetch the data and render it on the website
    Task.find({}, function(err,tasks){
        if(err){
            console.log("error in fetching tasks from db");
            return;
        }
    // Now use home.ejs file for rendering
    return res.render('home', { 
        title: "My todo-list app",
        todo_List: tasks
     });
    });
    // // Now use home.ejs file for rendering
    // return res.render('home', {
    //     title: "Home"
    // });
}


module.exports.create = function(req,res){
    // To create we use create function which create a json object in the database
    Task.create({
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    },function(err, newContact){
        if(err){
            console.log("error in creating a task", err);
            return;
        }
        // console.log('******', newContact);
        //This will redirect to the home page
        return res.redirect('back');
    });
}


// for deleting a task we used action 'delete' which deletes multiple tasks
module.exports.delete = function(req, res){
    // console.log(req.query);
    // // get the id from query in the url
    // let id = req.query.id
    // // find the task in the database using id and delete it
    // Task.findOneAndDelete(id, function(err){
    //     if(err){
    //         console.log('error in deleting the object from database');
    //         return;
    //     }
    //     return res.redirect('back');
    // });   
// GET THE ID IN TASK AND DELETE SELECTED USING  findByIdAndDelete 
    Object.keys(req.body).forEach(function(key){
        Task.findByIdAndDelete(key,function(err){
            if(err){
                console.log('Error in deleting an list from database',err);
                return;
            }
            // console.log('One list is deleted');
        });
    });
    // finally redirecting back
    return res.redirect('back');
}


//Defining action name and it's function
    // module.exports.actionName=function(req,res){}

// // Another action for home controller
// module.exports.settings = function(req,res){
//     res.end('<a href="#">Home Setting</a>');
// }