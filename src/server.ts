import { createServer } from "node:http";
import * as fs from "fs";

const LOCAL_PORT = 3110;
const LOCAL_URL = new URL(`http://127.0.0.1:${LOCAL_PORT}`);

const PATH_TO_INDEX_HTML = "public/index.html";

const server = createServer((req, res) => {
  fs.readFile(PATH_TO_INDEX_HTML, (err, data) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

function listen(url: URL) {
  server.listen(Number(url.port), url.hostname, () => {
    console.log(`Listening on ${url.toString()}`);
  });
}

function main() {
  listen(LOCAL_URL);
}

main();
