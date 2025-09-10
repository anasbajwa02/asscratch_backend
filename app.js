const express = require("express")
const app = express()
const db = require("./config/mongoose-connection.js")
const cookieParer = require("cookie-parser")
const path = require("path")
const ownerRouter = require("./routes/ownerRouter.js")
const productRouter = require("./routes/productRouter.js")
const userRouter = require("./routes/userRouter.js")



app.use(cookieParer())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")


app.use("/owner",ownerRouter)
app.use("/user",userRouter)
app.use("/product",productRouter)


app.listen(3000,(req,res)=>{
    console.log("server is running ")
})