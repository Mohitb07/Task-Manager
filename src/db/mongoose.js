const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex : true,
})

const User = mongoose.model('User', {
    name : {
        type    : String,
        required: true,
        trim    : true
    },
    email: {
        type        : String,
        required    : true,
        trim        : true,
        lowercase   : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type    :  Number,
        default :  0,
        validate(value) {
            if(value<0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type        : String,
        required    : true,
        trim        : true,
        minlength   : 7,
        validate(value){
            if(validator.contains(value, 'password')){
                throw new Error('password cannot contain password')
            } 
        }
        
    }

})

const Task = mongoose.model('Task', {
    description: {
        type     : String,
        required : true,
        trim     : true
    },
    isCompleted: {
        type    :  Boolean,
        default :  false
    }
})

// const firstTask = new Task({
//     description: 'First task',
//     isCompleted: false
// })

// firstTask.save().then(()=>{
//     console.log(firstTask)
// }).catch((error)=>{
//     console.log(error)
// })
// const user2 = new User({
//     name : '  Mohit Singh Bisht   ',
//     age  : 21,
//     email: '  email@email.com   ',
//     password:'mohitbisht123'
// })


// user2.save().then(()=>{
//     console.log(user2)
// }).catch(error=>console.log(error))

