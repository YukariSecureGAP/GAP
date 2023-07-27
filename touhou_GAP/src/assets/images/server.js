const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const jimp = require('jimp');


// save the log
const logFile = path.join(__dirname, 'logs', 'api.log');

// if logPath is not exists then create one
const logDir = path.dirname(logFile);
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// 日志生成中间件
const logger = (req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} - ${req.url}\n`;

    // 追加日志到日志文件
    fs.appendFile(logFile, log, (err) => {
        if (err) {
            console.error('Error writing log:', err);
        }
    });

    next();
};

// 使用 cors 中间件来设置 CORS 头信息并允许前端传递自定义请求头
app.use(
    cors({
        origin: '*', // 设置允许所有来源跨域访问，也可以设置成具体的前端域名，如 'http://localhost:5173'
        methods: ['GET'], // 设置允许的 HTTP 方法
        allowedHeaders: ['Content-Type', 'Authorization'], // 设置允许的自定义请求头
    })
);

// 添加静态资源中间件，映射图片路径到服务器上的实际图片文件路径
app.use('/images', express.static(path.join(__dirname, 'images')));

// 添加静态资源中间件，映射漫画路径到服务器上的实际漫画文件路径
app.use('/comics', express.static(path.join(__dirname, 'comic')));

// 修改 /api/images 路由处理逻辑，直接返回图片资源
app.get('/api/images', async (req, res) => {
    const jsonFilePath = path.join(__dirname, 'images.json');

    // Read the JSON file
    fs.readFile(jsonFilePath, async (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const images = JSON.parse(data);
            // 图片优化
            const optimizedImages = [];

            for (let image of images) {
                const originalImage = fs.readFileSync(image.path);
                const optimizedImage = await jimp.read(originalImage)
                    .then(img => {
                        img.quality(80);
                        img.resize(800, jimp.AUTO);
                        return img.getBufferAsync(img.getMIME());
                    });
                optimizedImages.push(optimizedImage);
            }
            // Return the images data as JSON response
            res.json(optimizedImages);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// 修改 /api/comics 路由处理逻辑，直接返回漫画资源
app.get('/api/comics', async (req, res) => {
    const jsonFilePath = path.join(__dirname, 'comic.json');

    // Read the JSON file
    fs.readFile(jsonFilePath, 'utf-8', async (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const comics = JSON.parse(data);
            const optimizedComic = [];

            for (let comic of comics) {
                const originalComic = fs.readFileSync(comic.path);
                const optimizedImage = await jimp.read(originalComic)
                    .then(img => {
                        img.quality(80);
                        img.resize(800, jimp.AUTO);
                        return img.getBufferAsync(img.getMIME());
                    });
                optimizedComic.push(optimizedImageInfo);
            }
            // Return the images data as JSON response
            res.json(optimizedComic);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

app.use(logger);

app.listen(5000, () => {
    console.log('Server is running');
});
