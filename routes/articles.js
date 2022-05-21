const express = require("express");
const article = require("./../models/article");
const Article = require('./../models/article')
const router = express.Router();

router.get('/newArticle', (req, res) => {
  res.render('newArticle', {article : new Article()})
});

router.get("/:id", async(req, res)=>{
  const article = await Article.findOne({id: req.params.id});
  if(article == null) {
    res.redirect('/');
  }
  res.render("show" , {article : article})
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
  await Article.findByIdAndDelete(req.params.id);
   res.redirect('/');
});

module.exports = router ;