const express = require('express')
const path = require('path')


const router = express.Router()

router.get('/home', (req, res)=>{
   
    res.send('home');
})




module.exports = router