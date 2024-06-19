const express = require('express');
const app = express();
// const db = require('./db');

const bodyParser = require('body-parser');
const menu = require('./menu');

app.use(bodyParser.json());

const person = require('./person');

app.get('/',function(req,res)
{
    res.send("connection successfully");
})

app.get('home',function(req,res)
{
    res.send("this is a home page");
})

app.get('/person',async(req,res)=>{
    // Assuming the request body contains the person data
    // const data = req.body

    // // create a new person  document using the mongodb model.
    // const newperson = new person(data);
    // newperson.save((error, savedperson)=>{
    //     if(error){
    //         console .log ('error saving pesron', error);
    //         res.status(500).json({error:'internal server error'})

    //     }
    //    else{
    //     console.log('data saved succesfully');
    //     res.status(200).json({savedperson})
    //    }
    // })

    // it is complicated for large number of data tere foe we can store data req in new person data
    // newperson.name = data.name;
    // newperson.age = data.age;
    // newperson.mobile = data.mobile;
    // newperson.email = data.email;
    // newperson.address = data.address;

    // USING ASYNC AWAIT FUCTION TRY CATCH
    try{
        const data = req.body;

        const newperson = new person(data);

        const response = await newperson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(error){
        console.log(error);
        res.status(500).json({error:'server error'});
    }
})
app.get('/person/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef'|| workType == 'manager'|| workType== 'waiter'){
            const response = await person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid work type'});
        }
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

const personroutes = require('./routes/personroutes');
app.use('/,personRoutes');

app.listen(3000,()=>{
    console.log('listening on port number 3000');
})