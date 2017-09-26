var express = require('express');
var router = express.Router();

router.get('/tasks', function(req,res,next){
	res.send('tasks api page \__(^_*)__/ ')
})

module.exports= router;