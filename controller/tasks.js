const Tasks = require('../models/task')

const getAllTasks = async (req, res)=>{
    try {
        const task = await Tasks.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const createTasks = async (req, res)=>{
    try {
        const task = await Tasks.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}
const getTasks = async (req, res)=>{
    try {
        const {id:TaskID} = req.params
        const task = await Tasks.findOne({_id:TaskID})
        if(!task){
            res.status(404).json({msg:`No task with the ${TaskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const updateTasks = async (req, res)=>{
    try {
        const task = await Tasks.findOneAndUpdate({_id:req.params.id}, req.body, { new: true, runValidators: true})
        if(!task){
            res.status(404).json({msg:`Cant find the id ${TaskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTasks = async (req, res)=>{
    try {
        const {id:TaskID} = req.params
        const task = await Tasks.findOneAndDelete({_id:TaskID})
        if(!task){
            res.status(404).json({msg:`No task with the ${TaskID}`})
        }
        res.status(200).json({task:null,status:"completed"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTasks, createTasks, getTasks, updateTasks, deleteTasks
}