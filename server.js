const express = require('express');
const res = require('express/lib/response');


const app = express();

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


app.listen(5000);