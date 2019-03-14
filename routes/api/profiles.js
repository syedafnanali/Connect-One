const express = require("express");
const router  = express.Router();

router.get("/test",(req,res)=>{
    res.json({msg:"profiles work"})
})

module.exports = router;