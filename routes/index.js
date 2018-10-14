var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var cmd     = require('node-command-line');
var execution_env='C:\\Users\\asus\\Anaconda3\\envs\\tensorflow\\python';
var file_to_execute=appRoot+"\\python";
/* GET home page. */
var i=0
router.get('/', function(req, res, next) {
//cmd.run(execution_env+" "+file_to_execute);
  console.log('Executed your command :');
  res.sendFile(appRoot+"\\views\\map.html")
});


router.get('/test',function(req,res,next){
	console.log('test');
	i+=1
	
	file_to_execute="\""+appRoot+"\\python\\test.py\""
	
	cmd.run(execution_env+" "+file_to_execute);

});
router.get('/loadjson',function(req,res,next){
	console.log(req.param("id"));
	
	res.sendFile(appRoot+"/json files/obj"+req.param("id")+".JSON");

});

module.exports = router;
