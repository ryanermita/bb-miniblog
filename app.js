var express = require('express'),
    app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index.html');
});

var server = app.listen(3000, function(){
  console.log('listening on port %d', server.address().port);
});
