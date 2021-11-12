const net = require('net');
const crypto = require('crypto');

const serve = net.createServer((webSocket) => {
  webSocket.once('data', (bf) => {
    // console.log(bf.toString(), '1');
    const header = getHeader(bf.toString());
    console.log(header);
    if(
      webSocket['Sec-WebSocket-Version'] !== 13
      || webSocket.Upgrade !== 'websocket'
      ) {
      webSocket.end();
    }else {
      const mask = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
      const key = header['Sec-WebSocket-Key'];
      const hash = crypto.createHash('sha1');
      hash.update(key + mask);
      let accept = hash.digest('base64');
      webSocket
    }
  });
  webSocket.on('data', (bf) => {
    console.log(bf, '之后');
  });
  webSocket.on('end', () => {
    console.log('node断了');
  });
});

function getHeader(str) {
  const tempArr = str.split(/\r\n/);
  tempArr.shift();
  const header = {};
  for(let i = 0; i < tempArr.length - 1; i++){
    if(tempArr[i]) {
      const [_, key, value] = tempArr[i].match(/(\b.+?): (.+)/);
      header[key.toLowerCase().trim()] = value.trim();
    }
  }
  return header;
}
serve.listen(9999); 

// [
//   'GET / HTTP/1.1',
//   'Host: localhost:9999',
//   'Connection: Upgrade',
//   'Pragma: no-cache',
//   'Cache-Control: no-cache',
//   'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
//   'Upgrade: websocket',
//   'Origin: file://',
//   'Sec-WebSocket-Version: 13',
//   'Accept-Encoding: gzip, deflate, br',
//   'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8',
//   'Sec-WebSocket-Key: ZaIpGtazEd33iwa1/jwPeA==',
//   'Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits',
//   '',
//   ''
// ]