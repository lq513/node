module.exports = function (db, server) {
  // 获取js文档数据
  server.get('/getJsDoc', (req, res) => {
    db.query('SELECT * FROM jsdoc', (err, data) => {
      if (err) console.log(err);
      res.send({
        code: '200',
        data
      });
    })
  });
}