var path = require('path');

module.exports = function (req, res, next) {
	// console.log(req.headers['user-agent'] + ' ' + req.method + ' ' + req.url)
	// console.log(req.originalUrl + req.originalUrl.endsWith('es6'))
	// var isJsFileRequested = req.originalUrl + req.originalUrl.endsWith('es6');
	// console.log(req.headers['user-agent'].split('Chrome/'))
	// console.log(req.headers['user-agent'].split('Chrome/')[1].substring(0, 2))
	console.log('123123123')
	var chromeVersion = req.headers['user-agent'] &&
				req.headers['user-agent'].split('Chrome/') &&
				req.headers['user-agent'].split('Chrome/')[1] &&
				req.headers['user-agent'].split('Chrome/')[1].substring(0, 2) &&
				parseInt(req.headers['user-agent'].split('Chrome/')[1].substring(0, 2));
	// console.log(parseInt(req.headers['user-agent'].split('Chrome/')[1].substring(0, 2)))
	// console.log(parseInt(req.headers['user-agent'].split('Chrome/')[1].substring(0, 2)) >= 49)
// Chrome/49
  // res.send(req.headers['user-agent'] + ' ' + req.method + ' ' + req.url);
  console.log('123')
  if (req.originalUrl.endsWith('es6')) {
  	console.log(chromeVersion)
  	if (chromeVersion && chromeVersion >= 49) {
	  next();
	  return;
  	}
	console.log(chromeVersion)
  	var pathToNewJS = path.join(__dirname, '../public', 'bin', 'hello.js');
  	console.log(pathToNewJS);
  	res.sendFile(pathToNewJS);
  }

  next();
}	
