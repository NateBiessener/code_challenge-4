var express = require('express');
var app = express();
var pg = require('pg');
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var connectionString = 'postgres://localhost:5432/treats';
var port = process.env.PORT || 3013;

app.listen(port, function(){
  console.log('server up on', port);
});

app.get('/', function(req, res){
  console.log('base hit');
  res.sendFile(path.resolve('public/views/index.html'));
})

app.get('/treats', urlencodedParser, function(req, res){
  console.log('in /treats get');
  pg.connect(connectionString, function(err, client, done){
    if (err){
      console.log(err);
    }
    else {
      var resultArray = [];
      var queryResult = client.query('SELECT * FROM treat');
      queryResult.on('row', function(row){
        resultArray.push(row);
      });
      queryResult.on('end', function(){
        done();
        res.send(resultArray);
      });
    }
  });
});//end /treats get

/*receives {
  name: --,
  description: --,
  url:
}*/
app.post('/treats', urlencodedParser, function(req, res){
  console.log('in /treats post');
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      console.log(err);
    }
    else {
      client.query('INSERT INTO treat (name, description, pic) VALUES ($1, $2, $3)', [req.body.name, req.body.description, req.body.url]);
      done();
      res.send(true);
    }
  });
});

app.use(express.static('public'));
