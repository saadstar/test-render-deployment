const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please enter Username"]
    },
    email: {
        type: String,
        required: [true, "Please enter Email"]
    },
    phone: {
        type: String,
        required: [true, "Please enter phone number"]
    }
}, {
    timestamps: true
});
module.exports = mongoose.model("Contact",contactSchema)