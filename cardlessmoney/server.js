var express= require('express');
var bodeyparser= require('body-parser');
var fs= require('fs');
var app= express();
app.use(bodeyparser.urlencoded({extended:false}));
app.use(bodeyparser.json());
app.use(express.static('./'));

var server= app.listen(3000,function(){
	
	console.log(server.address().port);
	
})