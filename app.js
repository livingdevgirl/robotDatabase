const express = require('express');
const expressHandlebars = require('express-handlebars');
const dataFile = require('./public/data');
const bodyParser = require('body-parser')
const app = express()

app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

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
  let robot = req.params.username;
  for (var i = 0; i < dataFile.users.length; i++) {
    if(dataFile.users[i].username === robot){
     res.render('user', dataFile.users[i]);
    }
  }


});




app.listen(3000);
console.log("listening at 3000");
