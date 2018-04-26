var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World! Test");
});

app.listen(5000);
