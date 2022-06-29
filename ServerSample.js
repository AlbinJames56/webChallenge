let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url,true);

    if (q.pathname === "/") {
      fs.readFile("htmlLogin.html", function (err, data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
        
      });
    } else if (q.pathname === "/signIn") {
        console.log(q.query);
      fs.readFile("htmlWelcome.html", function (err, data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signup") {
      fs.readFile("htmlWelcome.html", function (err, data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      });
    }else{
        res.write("error")
  }
})
  .listen(9000, () => console.log("Start working"));
