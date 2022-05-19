const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const article = require('./models/article')
const router = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/blog')

app.set('view engine' , 'ejs');
app.get('/' ,(req, res) => {
  let articles = [
    {
      title : "Arcticle title",
     adate : new Date(),
     desc : 'desc test' 
    },
    {
      title : "Arcticle title 2",
     adate : new Date(),
     desc : 'desc test' 
    }
  ]

   res.render('index' , {articles : articles});
});

app.use('/', router);
app.listen(5000);