const express = require('express');
const jwt = require('jsonwebtoken');


const app = express();

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

app.post('/api/post', verifyToken,(req,res)=>{

 jwt.verify(req.token, 'secretket',(err, authData)=>{
     if(err){
         res.sendStatus(403);
     }else{
         res.json({message:'post created', data:authData})
     }
 });

    res.json({message:'Api Posts'})
});


// Formet of token
// Authorization: Bearer <acesss_token>


// verify token function

function verifyToken(req,res,next){
    // get auth header value

    const bearerHeader = req.Headers['authorization'];
    // check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        // split the space
       const bearer = bearerHeader.split(' ');

       // get token from array
       const bearerToken = bearer[1];

       // set the token
       req.token = bearerToken;

       next();

        }else{
        // forbidden
        res.sendStatus(403)
    }
}



app.listen(3000, ()=>{
    console.log("server started on port 3000")
});
