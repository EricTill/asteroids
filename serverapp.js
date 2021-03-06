var express = require('express'),
       http = require('http'),
       path = require('path'),
   	app = express();

app.use(express.static(path.join(__dirname,'public')));

app.all('*', function(req,res){
    console.log('Connection attempt');
    res.sendfile('public/index.html');
});

http.createServer(app).listen(8000);
console.log('Localhost listening on port 8000');
