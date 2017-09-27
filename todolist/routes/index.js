var express = require('express');
var router = express.Router();

// router.get('/', function(req,res,next){
// 	res.send('index  \__(^_*)__/')
// })

router.get('/', function(req,res,next){
	res.render('index.html')
})

module.exports= router;