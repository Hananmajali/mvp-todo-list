var express = require('express');
var router = express.Router();
var mongojs= require('mongojs');
var db = mongojs('mongodb://hanan:Hanan@ds149324.mlab.com:49324/hananmajalidatabase',['tasks'])

// router.get('/tasks', function(req,res,next){
// 	res.send('tasks api page \__(^_*)__/ ')
// })

router.get('/tasks', function(req,res,next){
	db.tasks.find(function(err,tasks){
		//console.log(tasks) --> its an array of my tasks
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


//handle save task

router.post('/task', function(req,res,next){
	//console.log(req.body)--> it will show the task
	var task = req.body
	if(!task.task || !(task.isComplete + '')){
		res.status(400)
		res.json({
			"err": "not good data"
		});

	} else{ // every thing fine
		db.tasks.save(task, function(err, task){
			if(err){
				res.send(err)
			}
			res.json(task);
		})
	}	
})

// delete a task --> it will be depend on the spicific id of those tasks
// so its the same of get one task but with delete propertty 



module.exports= router;