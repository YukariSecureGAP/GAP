const express = require("express");
const redis = require("redis");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const REDIS_PORT = process.env.PORT || 6379;

// 创建Redis客户端
const client = redis.createClient();

//check the connection
client.on("connect", () => {
  console.log("Redis client connected");
});

client.connect(6379, "127.0.0.1");

client.on("error", (err) => {
  console.error("Redis connection error:", err);
});

app.use(express.json());

// 创建logs文件夹
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// 创建日志文件
const logFile = path.join(logDir, "app.log");

// 日志中间件
const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} - ${req.url}\n`;

  // 写入日志文件
  fs.appendFile(logFile, log, (err) => {
    if (err) {
      console.error("Error writing log:", err);
    }
  });

  next();
};

app.use(logger);

// 注册接口
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  // 加密密码
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error("密码加密出错：", err);
      return res.status(500).json({ error: "内部服务器错误" });
    }

    // 使用hset将用户名和加密后的密码保存到Redis的哈希表中
    client.hSet("users", username, hash, (err, reply) => {
      console.log(username);

      if (err) {
        console.error("保存用户数据出错：", err);
        return res.status(500).json({ error: "内部服务器错误" });
      } else {
        console.log("用户注册成功：", username);
        return res.status(200).json({ message: "用户注册成功" });
      }
    });
  });
});

// 登录接口
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // 获取用户密码
  client.hGet("users", username, (err, hashedPasswordFromRedis) => {
    if (err) {
      console.error("获取用户数据出错：", err);
      return res.status(500).json({ error: "内部服务器错误" });
    }

    if (!hashedPasswordFromRedis) {
      return res.status(401).json({ error: "用户名不存在" });
    }

    // 使用bcrypt的compare函数比较明文密码和从Redis中获取的加密后的密码
    bcrypt.compare(password, hashedPasswordFromRedis, (err, isMatch) => {
      if (err) {
        console.error("密码验证出错：", err);
        return res.status(500).json({ error: "内部服务器错误" });
      }

      if (!isMatch) {
        return res.status(401).json({ error: "密码不正确" });
      }

      res.json({ message: "登录成功" });
    });
  });
});

app.use(cors());

// 启动服务器
const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
