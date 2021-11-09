var express= require('express');
var app= express();

var f1= (req,res,next)=>{
    console.log("first function");
    next()
}

var f2= (req,res,next)=>{
    console.log("second function");
    next()
}

var f3= (req,res,next)=>{
    console.log("third function");
    next()
}

var f4=(req,res)=>{
    res.send('this is the last one')
}

app.get('/',[f1,f2,f3,f4])
var server = app.listen(3000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at http://%s:%s",host, port)
})