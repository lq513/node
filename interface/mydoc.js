module.exports = function (db, server) {
  // 获取js文档数据
  server.get('/getJsDoc', (req, res) => {
    db.query('SELECT * FROM jsdoc', (err, data) => {
      let code = 200;
      if (err) code = 500;
      res.json(code, {
        code: '200',
        data,
      });
    })
  });
}

// res.json([status|body], [body])  以json的形式返回数据
// res.render(view [, locals] [, callback])  返回对应的view和数据，此方法可以有回调函数，以处理可能出现的异常
// res.send([body|status], [body])  返回自定义的数据，比如json或者404等状态
// res.redirect([status,] path)  这个方法其实不是返回，而是跳转到另外一个url上