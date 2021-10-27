// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const mongoose= require('mongoose');
// Note using require mongoose  more than 1 time will require mongoose to use from the same instance.

// defining the schema for our database using new keyword
const taskSchema= new mongoose.Schema({
    desc: {
        type: String, 
        required: [true, 'Please fill the task description']
    },
    category: {
        type: String,
        required: [true, 'Please fill the category']
    },
    date: {
        type: String,
        required: [true, 'Please fill the deadline']
    }
});

// Declaring a collection for the fields to be stored in db or to tell mongoose that Task is the collection of all the schema
const Task= mongoose.model('Task', taskSchema); // Here model defines the collection

// Exporting the module Task
module.exports= Task;