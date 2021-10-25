// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const mongoose= require('mongoose');
// Note using require mongoose  more than 1 time will require mongoose to use from the same instance.


// defining the schema for our database using new keyword
const taskSchema= new mongoose.Schema({
    description: {
        type: String, 
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

// Declaring a collection for the fields to be stored in db
const Task= mongoose.model('Task', taskSchema); // Here model defines the collection

// Exporting the module Task
module.exports= Task;