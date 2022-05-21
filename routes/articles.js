const express = require("express");
const Article = require('./../models/article')
const router = express.Router();
const mongoose = require('mongoose');

router.get('/newArticle', (req, res) => {
  res.render('newArticle', {article : new Article()})
});

router.get("/:id", async(req, res)=>{
  const article = await Article.findOne({_id: mongoose.Types.ObjectId(req.params.id)});
  console.log(req.params.id);
  if(article == null) {
    res.redirect('/');
  }
  console.log(article)
  res.render("show" , {article : article})
});

router.get("/edit/:id", async(req, res)=>{
let article = await Article.findOne({_id: mongoose.Types.ObjectId(req.params.id)});
  if(article == null) {
    res.redirect('/');
  }
  res.render("newArticle" , {article : article})
});

router.post('/', async(req, res) => {
  let article = new Article({
    title : req.body.title,
    description : req.body.description,
    markdown : req.body.markdown,
  })

  try{
     article = await article.save();
     res.redirect('/');
  } catch(e) {
    res.render("newArticle", {article :article})
  }
});

router.delete("/:id", async(req, res)=>{
  await Article.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id));
   res.redirect('/');
});


router.put('/edit/:id', async(req, res)=> {
    let article = Article.findById(mongoose.Types.ObjectId(req.params.id));
    if (article == null){
      res.redirect('/')
    }
    Article.updateOne(req.body);
})
module.exports = router ;