const app = require('express')();
const express = require("express");
const path = require('path');

let count =0;

// app.use("/", express.static("index.html"));
app.use('/',express.static(path.join(__dirname, '/public')));

// app.get("/",(req,resp)=>{

//     resp.sendFile("./index.html")
// })

app.get("/stream",(req,resp)=>{

    resp.setHeader("content-Type","text/event-stream")
    setInterval(()=>{
        console.log("server sending message "+`{"counter":${count}}`)
        resp.write("data:"+`{"counter":${count}}`+"\n\n")
        count++
    },3000)
    
})


app.listen(8080);



