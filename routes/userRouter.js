var express = require('express');
var router = express.Router();
const users = require('../Model/User')
router.post('/users', (req,res)=>{
    const {name}= req.body
    users.create({name},err=>{
        err?res.send('task creation end up in failure'): res.send('adding a new user successfully') ;
    })
})
router.get('/users',async(req, res)=>{
    try {
        const data =await users.find().exec()
        res.json({user:data}) 
    } catch(error){
       error? res.json({msg : 'there is an error in getting'}): res.json({msg :'succeeded'}) 
    }
})
router.put('/users/:id', (req,res)=>{
    users.findByIdAndUpdate(req.params.id,req.body,err=>
        err?res.send('get users failed'): res.send('succeeded'))
})
router.delete('/users/:id', (req,res)=>{
    users.findByIdAndRemove(req.params.id,err=>
        err?res.send('Remove user failed'): res.send('successful removal'))
})
module.exports = router;