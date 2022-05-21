const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const article = require('./models/article')
const router = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/autodidHack')

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended: false}));
app.get('/' ,async(req, res) => {
  let articles = await article.find();
   res.render('index' , {articles : articles });
});

app.use('/', router);
app.listen(5000);