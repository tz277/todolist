import { createServer } from "node:http";

const LOCAL_ADDRESS = {
  port: 3010,
  host: "127.0.0.1",
};

const server = createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world!");
});

function main() {
  server.listen(LOCAL_ADDRESS.port, LOCAL_ADDRESS.host, () => {
    console.log(
      `Listening on http://${LOCAL_ADDRESS.host}:${LOCAL_ADDRESS.port}`
    );
  });
}

main();
