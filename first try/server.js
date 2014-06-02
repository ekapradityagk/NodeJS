var http = require('http');
http.createServer(function (req, res) 
{
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('YOLO\n');
}).listen(7777, "127.0.0.1");
console.log('Server running at Http://127.0.0.1:7777/');