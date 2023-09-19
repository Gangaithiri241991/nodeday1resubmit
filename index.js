 const express=require("express");
 const fs=require("fs");
 const path=require("path")
 const dirName=path.join(_dirname,"timestamp")
 // to initialize express server
 
 const app=express();
 app.get("/",(req,res)=>{
    res.send("hey🙂😄😃 web server");
 })

 app.get("/",(req,res)=>{
   res.send("hey🙂😄😃 sample server");
})
app.get("/date-time",(req,res)=>{
   let date=new Date();
   let currentTimeStamp=date.toUTCString().slice(0,-3);
   let content=`the last updated timestamp : ${currentTimeStamp}`
   console.log(dirName)
   fs.writeFile(`${dirName}/date-time.txt`,content,(err)=>{
      if(err){
         console.log(err)
         res.send("error in writing file")
         return
      }
      res.sendFile(path.join(dirName,"date-time.txt"))
   })
})
//listen to a server
app.listen(9000,()=>console.log(`server started in localhost 9000`));