const express = require('express');
const jwt = require('jsonwebtoken');


const app = express();


// app.get('/api', (req,res)=>{
//     res.json({message:'Api serevr'})
// });

app.post('/api/login',(req,res) =>{

    // User 
    const user = {
        id:1,
        username:'saurabh',
        email:'saurabh@gmail.com'
    }

     jwt.sign({user}, 'secretkey', (err,token)=>{

        res.json({ message:' generate token ' , Token: token });
     });
});


app.listen(3000, ()=>{
    console.log("server started on port 3000")
});
