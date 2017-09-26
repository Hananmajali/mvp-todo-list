var express = require('express');
var router = express.Router();
var mongojs= require('mongojs');
var db = mongojs('mongodb://hanan:Hanan@ds149324.mlab.com:49324/hananmajalidatabase',['tasks'])

// router.get('/tasks', function(req,res,next){
// 	res.send('tasks api page \__(^_*)__/ ')
// })

router.get('/tasks', function(req,res,next){
	db.tasks.find(function(err,tasks){
		if (err){
			res.send("there is an err in database"+ err);
		}
		    res.json(tasks);
	})
})

router.get('/task/:id', function(req,res,next){
	//var objectID = require("mongojs").ObjectId("objectidhere");
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
		if (err){
			res.send("there is an err in database"+ err);
		}
		    res.json(task);
	})
})

module.exports= router;