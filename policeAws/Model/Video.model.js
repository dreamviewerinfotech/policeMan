

const mongoose = require("mongoose");

const Video_Files = new mongoose.Schema(
    {
        Video : {
            type : String,
            required : true
        },
        altMessage : {
            type : String,
            required : true
        },
        userId : {
            type : String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Video_Schema", Video_Files);

//image