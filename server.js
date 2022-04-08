const http = require("http");

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});
const puerto = 3000;
server.listen(puerto, () => {
  console.log(`Server running at port ${puerto}`);
});
