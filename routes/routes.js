const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    const jsonData = axios.get("https://api.jikan.moe/v4/anime?q=Naruto");
    res.json(jsonData.data);
})

module.exports = router