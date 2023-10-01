// var express = require('express');
// var fs = require('fs')
// var marked = require('marked');
// var router = express.Router();

// marked.setOptions({
// 	renderer: new marked.Renderer(),
// 	gfm: true,
// 	tables: true,
// 	breaks: true,
// 	pedantic: false,
// 	sanitize: true,
// 	smartLists: true,
// 	smartypants: false
// });


// /* GET home page. */
// router.get('/post/:name', function(req, res, next) {
//     fs.readFile(`./posts/${req.params.name}.md`, function(err, data){
//         if(!err){
//             res.render('post', {
//                 content: marked.parse(data.toString()),
//                 title: req.params.name
//             }
//             );
//         }else{
//             res.send("404")
//         }
//     })
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');

// 创建博客
router.post('/create', blogController.createBlog);
// 查询博客列表
router.get('/query', blogController.getBlogList);
// 根据 id 查询博客详情
router.get('/query/:id', blogController.getBlogById);
// 根据 id 修改博客
router.patch('/update/:id', blogController.updateBlog);
// 根据 id 删除博客
router.delete('/delete/:id', blogController.deleteBlog);

module.exports = router;