module.exports = {
  es6functions: function (req, res, next) {
	  res.send(req.headers['user-agent'] + ' ' + req.method + ' ' + req.url);
	  next();
	}	
}