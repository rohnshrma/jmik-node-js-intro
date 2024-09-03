import http from "http";

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const hostname = "127.0.0.1";
const port = 3000;

// approach 2
// console.log(process.cwd());

// approach 1

// const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);

// const __dirname = path.dirname(__filename);
// console.log(__dirname);

// create a server

const server = http.createServer(async (req, res) => {
  let filePath = path.join(
    process.cwd(),
    "public",
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  console.log(filePath);

  let contentType = "text/html";
  try {
    // try to read the file
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
    // if found , send the file with a 200 status code
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch (err) {
    console.error(`File not found : ${filePath}.Error : ${err.message}`);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1> ${filePath} File Not Found</h1>`);
  }
});

// running the server
server.listen(port, hostname, () => {
  console.log(`server started at http://${hostname}:${port}`);
});
