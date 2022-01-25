const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        default: " ",
    }
}, {timestamps: true}
);

// timestamps indicate the time and date the user was created

module.exports = mongoose.model("User", UserSchema);