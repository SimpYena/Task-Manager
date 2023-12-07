const express = require('express')
const app = express()
const route = require('./route/tasks')
const port = 3000
//middleware
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/api/v1/tasks', route)

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})