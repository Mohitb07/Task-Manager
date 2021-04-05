const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
        res.sendStatus(201).send(user)
    }).catch((error)=>{
        res.sendStatus(400).send(error)
    })
})

app.get('/users', (req, res)=> {
    User.find({}).then(users=>{
        res.send(users)
    }).catch(error=>{
        res.sendStatus(500).send()
    })
})

app.get('/users/:id', (req, res)=>{
    const _id = req.params.id
    User.findById(_id).then(user=>{
        
        res.send(user)
    }).catch(error=>{
        res.sendStatus(404).send()
    })
})

app.post('/tasks',(req, res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.sendStatus(201).send(task)
    }).catch((error)=>{
        res.sendStatus(400).send(error)
    })
})

app.get('/tasks',(req, res)=>{
    Task.find({}).then(task=>{
        res.send(task)
    }).catch(error=>{
        res.sendStatus(404).send()
    })
})

app.get('/tasks/:id', (req, res)=>{
    const _id = req.params.id
    Task.findById(_id).then(task=>{
        res.send(task)
    }).catch(error=>{
        res.sendStatus(404).send()
    })
})

app.listen(port, ()=>{
    console.log('Server is up on port', port)
})