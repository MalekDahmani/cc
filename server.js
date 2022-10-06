const express = require('express');
const app = express();
const contact = require('./contact')
const port = 3000;

const bodyparser = require ('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
  }));
app.use(bodyparser.json())




app.get('/',function(req,res){
    res.send('Malek')
})


app.post('/contact',function(req,res){
    console.log(req.body)
})


app.listen(port, function(){
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });