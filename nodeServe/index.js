const express = require("express");
const bodyParser = require("body-parser");
const url = require("url");
const querystring = require("querystring");
const http = require("http");
const bcrypt = require("bcryptjs");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//固定的用户
const users = [
  {
    username: "admin",
    password: "$2b$10$J5JvJj5ZJ3zJ5JvJj5ZJ3zJ5JvJj5ZJ3zJ5JvJj5ZJ3zJ5JvJj5ZJ",
  },
  {
    username: "test",
    password: "$2b$10$J5JvJj5ZJ3zJ5JvJj5ZJ3zJ5JvJj5ZJ3zJ5JvJj5ZJ3zJ5JvJj5ZJ",
  },
];

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const { username, password } = querystring.parse(query);
  // console.log(pathname, query, username, password);
  if (pathname === "/login") {
    const user = users.find((u) => u.username === username);
    if (user) {
      const match = bcrypt.compareSync(password, user.password);
      if (match) {
        res.end("Login success");
      } else {
        res.end("Invalid username or password");
      }
    } else {
      res.end("Invalid username or password");
    }
  } else {
    res.end("Hello, world!");
  }
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
