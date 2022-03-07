const express=require("express");
const { listen, path } = require("express/lib/application");
const app=express();
app.use(logger);
// app.use(checkPermission);
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
function checkPermission(req,res,line){
    line()
    console.log("i")
    if(path=="/author"){
       res.send("node")
    }
    
}
function logger(req,res,next){
    console.log("books")
    next();
}
app.listen(1234,()=>{
    console.log("listening 1234")
})