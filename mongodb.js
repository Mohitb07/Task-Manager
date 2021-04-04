// CRUD OPERATIONS

// COLLECTION -> TABLE (MYSQL)
// insertOne -> CREATE COMMAND (1 document)
// inserMany -> CREATE COMMAND (more documents)

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser : true ,useUnifiedTopology: true }, (error, client)=> {
    if (error) return console.log('Unable to connect to database')
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'pushkar',
    //     age:'20'
    // }, (error, result)  => {
    //     if (error) return 'Unable to insert data'
    //     return console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Keshav Sharma',
    //         age: '21'
    //     },
    //     {
    //         name: 'Karan Gupta',
    //         age: '21'
    //     }
    // ], (error, result)=>{
    //     if (error) return console.log('Unable to add records')
    //     return console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'First task',
    //         isCompleted: false
    //     }, 
    //     {
    //         description:'Second task',
    //         isCompleted: true
    //     },
    //     {
    //         description:'Third task',
    //         isCompleted: true
    //     }
    // ],(error, result)=> {
    //     if (error) return console.log('Unable to add tasks')
    //     return console.log(result.ops)
    // })

    // ******************READ**********************

    // db.collection('users').findOne({name:'mohit'},(error, user)=> {
    //     if(error) return console.log('Unable to fetch')
    //     console.log(user)
    // })

    // db.collection('users').find({name:'Mohit'}).toArray((error, users)=> {
    //     console.log(users)
    // })

    // db.collection('users').find({name:'Keshav Sharma'}).count((error, count)=> {
    //     console.log(count)
    // })

    // db.collection('users').findOne({_id:new ObjectID("6069608d586022190cfa11b4")},(error, user)=> {
    //     if (error) return console.log('Unable to fetch')
    //     return console.log(user)
    // })

    // db.collection('tasks').find({isCompleted:false}).toArray((error, tasks)=> {
    //     if (error) return console.log('Unable to fetch') 
    //     return console.log(tasks)
    // })

    // ****************UPDATE*******************

    // db.collection('users').updateOne({
    //     name:'pushkar'
    // },{
    //     $set:{
    //         name:'pushkar bisht'
    //     }
    // }).then((result)=> {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     isCompleted: false
    // },{
    //     $set:{
    //         isCompleted: true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch(error=>{
    //     console.log(error)
    // })

    // ***************DELETE****************

    db.collection('users').deleteMany({
        age: '20'
    }).then(result => console.log(result))
    .catch(error => console.log(error))


})