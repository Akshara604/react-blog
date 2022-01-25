const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async(req,res) =>{
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.json(savedCat);
    } catch (error) {
        res.json(error);
    }
});

router.get("/", async(req,res) =>{
    try {
        const categs = await Category.find();
        res.json(categs);
    } catch (error) {
        res.json(error);
    }
});


module.exports = router