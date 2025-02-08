// HTTP Methods

// GET: Retrieve data (read-only, safe, idempotent).
// POST: Submit data (create something new, not idempotent).
// PUT: Update/replace data (idempotent).
// PATCH: Partially update data (not necessarily idempotent).
// DELETE: Delete data (idempotent).

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/search":
        let search = myUrl.query.search_query;
        res.end(search);
            break;
      case "/signup":
        if (req.method === "GET") res.end("This is a signup form");
        else if (req.method === "POST") res.end("Success");
      default:
        res.end("404 Not Found");
    }
  });
});
myServer.listen(8000, () => {
  console.log("Server Started");
});
