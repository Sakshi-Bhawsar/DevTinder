const express = require("express")

const app = express();

app.get("/",(req,res)=>{
     res.send("heloo  jhjkhjkh  jfhukdhgjksdn")
})

app.listen(3000,()=>{
    console.log( "app is succesfully listening on port 3000")
})