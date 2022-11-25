const querystring = require('querystring');

module.exports = function(db, server) {
  server.get('/test', (req, res) => {
    // console.log(res);
    const sourceUrl = 'aHR0cCUzQSUyRiUyRmxvY2FsaG9zdCUzQTg4ODAlMkZhYSUyRm1vbml0b3IubWluLmpz';
    let str = Buffer.from(sourceUrl, 'base64').toString();
    str = querystring.unescape(str)
    res.send(400, {
      message: '成功',
      data: str
    });
    console.log(str);
  });

  server.post('/test', (req, res) => {
    console.log(req.body);

    // res.redirect(200, '/test')
    res.send(200, '成功S')
  })

}