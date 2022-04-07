const express=require("express");
const { listen, path } = require("express/lib/application");
const app=express();
app.use(logger);

app.get("/books",(req,res)=>{
    return  res.send({route:"/books"});
})
app.get("/libraries",checkPermission,(req,res)=>{
    return res.send({route:"/libraries",
permission:true});
})
app.get("/author",checkPermission,(req,res)=>{
    return res.send({route:"/author",
permissio:true})
})
function logger(req,res,next){
   
    next();
}
function checkPermission(req,res,line){
    if (req.route=="/author"){
        console.log("y")
    } 
   line()
   
    
    
}

app.listen(1234,()=>{
    console.log("listening 1234")
})