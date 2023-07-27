const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const blogSchema = new Schema({
    title:{
        type:String,
        required :true
    },
    snippet:{
        type:String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, {timestamps: true}) ;              //autoassign data when updates

const Blog = mongoose.model('Blog', blogSchema) ;           //going to look for Blogs   //type of object
module.exports = Blog ;