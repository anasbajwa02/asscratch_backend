const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hey its working owner router")
})

module.exports = router