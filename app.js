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
        // document.querySelector('.job').style.color = "red";
  }
}
  res.render('home', dataFile)
});

app.get("/user/:username", function(req, res){
  let usernameLink = req.params.name;

  for (var i = 0; i < dataFile.users.length; i++) {
      res.render('user', dataFile.users[i])
  }
});

app.use(express.static('public'));


app.listen(3000);
console.log("listening at 3000");
