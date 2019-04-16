const express = require('express')
const app = express()

let todos = []

app.use(express.json)
app.use(express.urlencoded({extended:true}))

//retrieve data
app.get('/todos',(req,res) => {
    res.send(todos)
})

//retrieve data by id
app.get('/todos/:id',(req,res) => {
    res.send(todos[req.param.id])
})

//add data
app.post('/todos',(req,res) => {
    todos.push({
        task:req.body.task,
        priority:parseInt(req.body.priority)
    })
    res.send({success:true,message:todos.length})
})

//delete data
app.delete('/todos/:id', (req, res) => {
    todos.splice(req.params.id, 1);
    res.send({success: true, message: todos.length})
  })

