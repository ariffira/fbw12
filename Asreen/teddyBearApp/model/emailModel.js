const mongoose=require('mongoose')
var userSchema = new mongoose.Schema({
    name:String,
    email:{type:String,required: true}, 
    message:String,
    authToken: { type: String, required:true},
});

var Email = mongoose.model('Email', userSchema);
module.exports=Email;