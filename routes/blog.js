var express = require('express');
var fs = require('fs')
var marked = require('marked');
var router = express.Router();

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});


/* GET home page. */
router.get('/post/:name', function(req, res, next) {
    fs.readFile(`./posts/${req.params.name}.md`, function(err, data){
        if(!err){
            res.render('post', {
                content: marked.parse(data.toString()),
                title: req.params.name
            }
            );
        }else{
            res.send("404")
        }
    })
});

module.exports = router;
