const express = require('express')
const route = express.Router()
const {getAllTasks, createTasks, getTasks, updateTasks, deleteTasks} = require('../controller/tasks')

route.route('/').get(getAllTasks).post(createTasks)

route.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)

module.exports = route