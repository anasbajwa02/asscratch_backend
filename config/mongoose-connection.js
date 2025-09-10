const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ascatch")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(`Db connection failed and error: ${err}`)
})

module.exports= mongoose.connection;