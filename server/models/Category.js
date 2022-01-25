const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
}, {timestamps: true}
);

// timestamps indicate the time and date the user was created

module.exports = mongoose.model("Category", CategorySchema);