const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name:String, 
    completed:Boolean
})