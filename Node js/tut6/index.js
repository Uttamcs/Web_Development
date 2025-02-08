const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const log = `${new Date().toUTCString()}: ${req.url} --> New Request Received\n`
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("HomePage me aa gye bhai")
                break;
            case '/about':
                res.end("I'm Uttam Kumar")
                break;
            default:
                res.end("404 Not Found")
        }
    })
})

myServer.listen(8000, () => console.log("Server Started"))