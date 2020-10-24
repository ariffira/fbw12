const mongoose=require('mongoose')
var commentSchema = new mongoose.Schema({
    comment:String, 
    product_name:String,
    created_at:{ type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports=Comment;