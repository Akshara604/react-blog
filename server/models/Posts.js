const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    descrip:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
    username:{
        type: String,
        required: true,
    },
    categories:{
        type: Array,
    }
}, {timestamps: true}
);

// timestamps indicate the time and date the user was created

module.exports = mongoose.model("Post", PostSchema);