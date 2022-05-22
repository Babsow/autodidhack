const {marked} = require('marked');
const mongoose = require('mongoose');
const slugify = require('slugify');
const creatDomPurify = require("dompurify");
const {JSDOM } = require('jsdom');
const dompurify = creatDomPurify(new JSDOM().window)



const articleSchema = new mongoose.Schema(
  {
    
    title : {
      type : String,
      required : true,
    },
    description : {
      type : String,
    },
    markdown : {
      type : String,
      required : true
    },
    createdAt: {
      type : Date,
      default : Date.now()
    },
    slug : {
      type : String,
      required : true,
      unique : true
    },
    sanitazedHtml : {
      type : String,
      required : true
    }
  }
)

articleSchema.pre('validate' , function(next){
    if(this.title) {
      this.slug = slugify(this.title, {lower : true , strict : true})
    };
    if(this.markdown) {
      this.sanitazedHtml = dompurify.sanitize(marked.parse(this.markdown));
    };
    next();
})
module.exports= mongoose.model('Article' , articleSchema)