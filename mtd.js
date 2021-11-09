var express= require('express');
var app= express();
app.get('/hello',(req,res)=>{
    res.send("Hello!Welcome to the app")
})
 app.post('/mypost',(req,res)=>{
    res.send("from post method")
})

var server = app.listen(3000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at http://%s:%s",host, port)
})