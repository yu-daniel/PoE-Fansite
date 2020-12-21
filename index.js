// Initialize express, handlebars, and paths for setting up the server
var express = require('express');
var path = require('path');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 17590);


// various routes to render the different webpages
app.get('/', function(req, res){
	res.render('home')
});

app.get('/blog', function(req, res){
	res.render('blog')
});

app.get('/projects', function(req, res){
  res.render('projects')
});

app.get('/contacts', function(req, res){
  res.render('contacts')
});


/*When the user visits the ladder subpage, the site automatically
fetches live player ranking data from Path of Exile's API and outputs
the rank, name, level, class, and online status info to the ladder
handlebar*/
app.get('/ladder', function(req, res){

  var ladder_list = []
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var request = new XMLHttpRequest();
  
  request.open("GET", "http://api.pathofexile.com/ladders/Standard?offset=0&limit=200", false);
  request.send(null);

  let data = JSON.parse(request.responseText);

  var queryList = []
  for (var i=0; i<199; i++){
    queryList[queryList.length] = {'rank': i, 'name': data.entries[i].character.name, 
    'level': data.entries[i].character.level, 'class': data.entries[i].character.class, 
    'online': data.entries[i].online};
  }
  var resObj = {queryObj: queryList};
  res.render('ladder', resObj);
});


// handle 404 responses
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// handle 500 responses
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

// tell Express to listen at which port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
