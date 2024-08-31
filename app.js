import http from "http";

const hostname = "127.0.0.1";
const port = 3000;

// create a server

const server = http.createServer((req, res) => {
  // set the response header
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  //   handling the home router
  if (req.url === "/") {
    res.end("Welcome to the home page!\n");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page!\n");
  } else if (req.url === "/contact") {
    res.end("Welcome to the contact page!\n");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found\n");
  }
});

// running the server
server.listen(port, hostname, () => {
  console.log(`server started at http://${hostname}:${port}`);
});
