var http = require("http");

http.createServer(function (request , response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello this is mt first node.js project\n');
}).listen(8081);
console.log('Server started at http://127.0.0.1:8081');