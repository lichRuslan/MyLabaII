const express = require('express');
const bodyParser = require('body-parser');

const app =express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine ', 'ejs');
//const arr = ['test1', 'test2', 'test3'];
const arr = ["test1"];
const arr2 = ["lol"];
const arr3 = ["az"];

app.get('/index', function(req,res){
    res.render('index.ejs',{arr: arr,arr2:arr2,arr3:arr3,idQ: 0, otQ: 0, otQ2: 0  } );
});

app.post('/index',urlencodedParser, function(req,res){
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('obrabotka.ejs', {data: req.body});
});

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
  arr.push(req.body.text);
  arr2.push(req.body.textTrue);
  arr3.push(req.body.textFouls);
  res.redirect('/index');
});


app.get('/about', function(req,res){
    res.render('about.ejs' );
});
app.get('/news/:id', function(req,res){
    var obj = {title : "Hi", id: 5, test:["Hi", "my", "name", "Ruslan", 456]};
    res.render('news.ejs', {newsId: req.params.id, obj : obj});
});


app.listen(9093);