var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port = (process.environment.PORT || 3000);
//var host = "0.0.0.0";

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
