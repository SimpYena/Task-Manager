const getAllTasks = (req, res)=>{
    res.send('All Items From The File')
}
const createTasks = (req, res)=>{
    res.json(req.body)
}
const getTasks = (req, res)=>{
    res.json({id:req.params.id})
}
const updateTasks = (req, res)=>{
    res.send('Updated Tasks')
}
const deleteTasks = (req, res)=>{
    res.send('Deleted Tasks')
}

module.exports = {
    getAllTasks, createTasks, getTasks, updateTasks, deleteTasks
}