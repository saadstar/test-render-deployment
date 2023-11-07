const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please Enter Username"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        unique: [true, "Email already taken"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"]
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model("User", userSchema);