const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const Article = require('./models/article')
const router = require('./routes/articles')
const override = require('method-override');
const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost/autodidHack')

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.get('/' ,async(req, res) => {
  let articles = await Article.find().sort({createdAt : 'desc'});
   res.render('index' , {articles : articles });
});

app.use('/', router);
app.listen(5000);