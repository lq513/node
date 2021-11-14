module.exports = function(db, server) {
  server.get('/test', (req, res) => {
    // console.log(res);
    res.send({
      message: '成功',
      data: 'ok'
    });
    // console.log(req.url);
  });
}