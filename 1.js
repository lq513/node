const express = require('express');
const expressStatic =  require('express-static');
const multer = require('multer');
const fs = require('fs');
const consolidate = require('consolidate');
const pathLib = require('path');
const mysql = require('mysql');
console.log('请启数据库');

const db = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'mydb'})
var server = express();
server.set('view engine', 'html');
server.set('views', __dirname+'/views');
server.engine('html', consolidate.ejs);
server.use(multer({ dest: './static/pic'}).any());
server.use(function(req, res, next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  //接收ajax请求手动提交的cookie信息
  res.header("Access-Control-Allow-Credentials", true);
  res.header("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") {
    res.send(200);
  } else { next() };//让options请求快速返回
});

server.get('/test', (req, res) => {
  // console.log(res);
  res.send({
    message: '成功1',
    data: 'ok'
  });
  // console.log(req.url);
});
server.get('/', (req, res) => {
  db.query('SELECT * FROM hotnews', (err, data) => {
    if (err) console.log(err);
    // res.render('index.ejs', {news: data});
    res.render('test.ejs');
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

server.post('/upload', (req, res) => {
  const ext = pathLib.parse(req.files[0].originalname).ext;
  // console.log(`./static/pic/${req.files[0].filename+ext}`);
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
server.use(expressStatic('./testStatic'));
console.log('服务已启动')

server.listen(3002);