const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

//REGISTER
//router.post is used to create new data

router.post("/register", async(req,res) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:  hashedPass,
        });

        const user = await newUser.save();
        const {password, ...others} = user._doc; //... spread operator

        res.json(others);
    } catch (error) {
        res.json(error);
    }
});

//LOGIN
router.post("/login", async(req,res) =>{
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.json("Wrong Credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.json("Wrong Credentials!");

        const {password, ...others} = user._doc; //... spread operator

        res.json(others);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router