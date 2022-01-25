const router = require("express").Router();
const User = require("../models/Users");
const Post = require("../models/Posts");
const Posts = require("../models/Posts");

//CREATE NEW POST
//router.put is used to update data

router.post("/", async(req,res) =>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (error) {
        res.json(error);
    }
});

//UPDATE POST

router.put("/:id", async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                {new:true},
                );
                res.json(updatedPost);
            } catch (error) {
                res.json(error);
            }
        } else{
            res.json("You can update only your post!");
        }
    } catch (error) {
        res.json(error);
    }
});

//DELETE POST 

router.delete("/:id", async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                await post.delete();
                res.json("Post Has been deleted...");
            } catch (error) {
                res.json(error);
            }
        } else{
            res.json("You can delete only your post!");
        }
    } catch (error) {
        res.json(error);
    }
});

//GET POST
router.get("/:id", async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.json(error);
    }
});

//GET ALL POSTS
router.get("/", async(req,res) =>{
    const username = req.query.user;
    const category = req.query.categ;
    try {
        let posts;
        if(username ){
             posts = await Post.find({username}); //{username} === {username:username} in es6
        } else if(category){
            posts = await Post.find({categories:{
                $in: [category]
            }});
        } else{
            posts = await Post.find();
        }
        
        res.json(posts);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router