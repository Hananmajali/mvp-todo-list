var express= require ('express');
var path = require ('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();
//var port = 8000;
var port =3000;


//view
app.set('views',path.join(__dirname,'views' ));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)


// set static folder
app.use(express.static(path.join(__dirname, 'client')));


//body parser middel ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port, function(){
	console.log('hanan server its work \__(^_*)__/'+ port)
})


