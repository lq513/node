const mysql = require('mysql');

module.exports = function (server) {
  const db2 = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'mydoc'});
  
  // 获取js文档数据
  server.get('/getJsDoc', (req, res) => {
    db2.query('SELECT * FROM jsdoc', (err, data) => {
      if (err) console.log(err);
      res.send({
        message: '成功',
        data
      });
    })
  });
}