const express=require('express')
const router=express.Router()

let {people}=require('../../data')


router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

router.post('/',(req,res)=>{
    // If the name is provided
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).send({success:true,person:name})
})


router.post('/postman', (req,res)=>{
    // This is available as the req.body.name
    const {name}=req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Please Provide Name Value'})
    }
    res.status(201).send({sucess:true,data:[...people,name]})
    // This is the rest operator [...people,name] where it will
    // output the rest of the items in people and the new name created.
})




router.put('/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    const person=people.find((person)=>person.id===Number(id))
    if(!person){
        return res
        .status(404)
        .json({success:false,msg:`No person with the id ${id}`})
    }
    const newPeople=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})
})




router.delete('/:id',(req,res)=>{
    // Directly accessing the params Object here
    const person=people.find((person)=> person.id===Number(req.params.id))
    
    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `No person with this id ${req.params.id}`})
    }
    const newPeople=people.filter((person)=> person.id !==Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
})

module.exports=router

