// 服务端渲染页面
const express = require('express');
// const expressStatic =  require('express-static');
const multer = require('multer');
const fs = require('fs');
const consolidate = require('consolidate');
const pathLib = require('path');
const mysql = require('mysql');
const myDocIF = require('./interface/mydoc')
const myDbIF = require('./interface/mydb');
console.log('请启数据库');

const db = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'mydb'})
const db2 = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'mydoc'});

var server = express();
server.set('view engine', 'html');
server.set('views', __dirname+'/views');
server.engine('html', consolidate.ejs);
server.use(multer({ dest: './static/pic'}).any());
server.use(function (req, res, next) {
  console.log(__dirname, req.url, req.originalUrl, '------');
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  //接收ajax请求手动提交的cookie信息
  res.header("Access-Control-Allow-Credentials", false);
  res.header("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") {
    res.send(200);
  } else { next() };//让options请求快速返回
});
myDocIF(db2, server);
myDbIF(db, server);

server.get('/', (req, res) => {
  db.query('SELECT * FROM hotnews', (err, data) => {
    if (err) console.log(err);
    res.render('index.ejs', {news: data});
    // res.render('test.ejs');
  })
});
server.get('/technology', (req, res) => {
  console.log(req.url)
  res.render('technology.ejs');
});
server.get('/about', (req, res) => {
  res.render('about.ejs');
});
server.get('/blog', (req, res) => {
  res.render('blog.ejs');
});
server.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

// Server-Sent Events
server.get('/stream', (req, res) => {
  let num = 0;
  res.writeHead(200, {
    "Content-Type":"text/event-stream;charset=UTF-8",
    "Cache-Control":"no-cache",
    "Connection":"keep-alive",
  });
  console.log('sse连接开始')
  res.write("id: msg1\n")
  res.write("retry: 10000\n"); // 指定浏览器重新发起连接的时间间隔
  // res.write("event: foo\n") // 指定浏览器自定义的事件，指定一次执行一次
  res.write("data: " + 1 + "\n\n");
  res.write("data: " + 2 + "\n\n");

  const interval = setInterval(function () {
    res.write("data: " + `{"foo": "bar","baz": ${++num}}\n\n`);
  }, 1000);

  req.connection.addListener("close", function () {
    console.log('sse is closed');
    clearInterval(interval);
  }, false);
});

server.post('/upload', (req, res) => {
  const ext = pathLib.parse(req.files[0].originalname).ext;
  console.log(`./static/pic/${req.files[0].filename+ext}`);
  console.log(1111, req.files);
  fs.rename(req.files[0].path, req.files[0].path + ext, (err) => {
    if (err) {
      res.send({
        message: '上传失败',
        err
      });
    } else {
      res.send('上传成功');
    }
  })
});
// 使用 expressStatic 后，当匹配不上的时候不能执行下面的 *
server.use(express.static('./testStatic'));
// 配合前端 browser
server.get('*', (request, response) => {
  response.sendFile(pathLib.resolve(__dirname, 'testStatic', 'index.html'))
});
console.log('服务已启动')

server.listen(3002);