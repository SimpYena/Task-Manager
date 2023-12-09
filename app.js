const express = require('express')
const app = express()
const route = require('./route/tasks')
const port = 3000
require('dotenv').config()
const connectDB = require('./db/connect')
//middleware
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/api/v1/tasks', route)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is listening on ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()
