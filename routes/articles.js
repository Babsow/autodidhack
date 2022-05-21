const express = require("express");
const article = require("./../models/article");
const Article = require('./../models/article')
const router = express.Router();

router.get('/newArticle', (req, res) => {
  res.render('newArticle', {article : new Article()})
})

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
    res.render("/newArticle", {article :article})
  }
})

module.exports = router ;