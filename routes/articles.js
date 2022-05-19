const express = require("express");
const article = require('./../models/article')
const router = express.Router();

router.get('/newArticle', (req, res) => {
  res.render('newArticle', {article : new article()})
})


module.exports = router ;