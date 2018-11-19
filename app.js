// var http = require("http");
// http.createServer(function(request, response) {
//  console.log(request.url)
//    console.log("接收到網頁請求！");
//   response.writeHead(200, {"Content-Type": "text/HTML"});
//   response.write("<h1>Hello World</h1>");
//   response.end();
// }).listen(3000);
// console.log("Server已開啟port: 3000.");


var http = require("http");


//  node.js 載入模組


http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url == '/obobobo'){
// 路由
    // 資料庫
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>obobobo</h1>");
    response.end();
  }else if(request.url == '/bobobob'){
     console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1 style='color:pink'>bobobobo</h1>");
    response.end();
  }
  
}).listen(process.env.PORT || 3000);
console.log("Server已開啟port: 3000.");

