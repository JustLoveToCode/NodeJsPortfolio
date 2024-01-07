let {people}=require('../data');

const getPeople = (req,res) =>{
    // returning the response status of 200:
    res.status(200).json({success:true, data:people})
};


const createPerson = (req,res)=>{
    // If the name is provided:
    const {name}=req.body
    // If the name do not exist, returning the response status of 400:
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    // If the result is successful, it will return the response status of 201:
    res.status(201).send({success:true,person:name})
}

const createPersonPostman = (req,res)=>{
    // This is available as the req.body.name
    // req.body is referring to the Body of the HTTP Request:
    // Middleware for Parsing the Request Body. To Access the
    // req.body, you will need to use the middleware that parsed
    // the Incoming Request Body. For example, using the express.urlencoded
    // and the express.json which are the Middleware Function in the ExpressJs Application:
    // These middleware functions will populate the req.body with the parsed data:
    // This is getting the name properties from the req.body:
    const {name}=req.body
    // If the name do not exist:
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Please Provide Name Value'})
    }
    // If the Status Code is Successful:
    res.status(201).send({sucess:true,data:[...people,name]})
    // This is the rest operator [...people,name] where it will
    // output the rest of the items in people and the new name created.
}


const updatePerson = (req,res)=>{
    // This is getting the :id from the req.params:
    const {id}=req.params
    // This is getting the name variable from the req.body:
    const {name}=req.body
    // This is using the find method to get the person.id
    // and see whether it is equal to the id in the req.params:
    const person=people.find((person)=>person.id===Number(id))
    // If the person do not exist:
    if(!person){
        return res
        .status(404)
        .json({success:false,msg:`No person with the id ${id}`})
    }
    // Using the map Method here to Iterate
    // over the people here:
    const newPeople=people.map((person)=>{
        // If the person.id is actually equal to the id
        // in the req.params:
        if(person.id===Number(id)){
        // This will return person.name properties equal to the name:
            person.name=name
        }
        return person
    })
    // Getting the response status which is in the Json Format:
    res.status(200).json({success:true,data:newPeople})
}

const deletePerson = (req,res)=>{
    // Directly accessing the params Object here using the find method:
    const person=people.find((person)=> person.id===Number(req.params.id))
    // If the person do not exist here:
    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `No person with this id ${req.params.id}`})
    }
    // Using the filter method to filter the Data based on the id:
    // req.params.id is accessing the id from the URL on the api/people/:id
    // filter method on the Array itself and each of the element will be people:
    const newPeople=people.filter((person)=> person.id !==Number(req.params.id));
    // This is returning the response status of 200 with the json message:
    return res.status(200).json({success:true, data:newPeople})
}

module.exports = {
    getPeople, createPerson, createPersonPostman,
    updatePerson, deletePerson
}
