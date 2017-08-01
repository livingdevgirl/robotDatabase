const express = require('express');
const expressHandlebars = require('express-handlebars');
const dataFile = require('./public/data')
const fs = require('fs');
const app = express()

app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');



app.get('/', function(req, res){
//for loop if value key is null, target same place and assign it to string "availble for hire" console.log(dataFile)
for (var i = 0; i < dataFile.users.length; i++) {
  if (dataFile.users[i].job === null){
        dataFile.users[i].job = "reboot me, i need work!";
  }
}
  res.render('home', dataFile)
});

app.use(express.static('public'));


app.listen(3000);
