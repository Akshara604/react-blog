const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const Post = require("../models/Posts");

//UPDATE
//router.put is used to update data

router.put("/:id", async(req,res) =>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },
            {new:true},
            );
            res.json(updatedUser)
        } catch (error) {
            res.json(error);
        }
    } else{
        res.json("You can only update your account!")
    } 
});

//DELETE

router.delete("/:id", async(req,res) =>{
    if(req.body.userId === req.params.id){
        try {
            const user = User.findById(req.params.id);
            if(user){
            try {
                await User.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
            
                res.json("Deleted Account successfully!")
            } catch (error) {
                res.json(error);
            }} else{
                res.json("User not found!")
            }
        } catch (error) {
            res.json(error);
        }
        
    } else{
        res.json("You can delete only your account!")
    } 
});

//GET USER

router.get("/:id", async(req,res) =>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.json(others);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router