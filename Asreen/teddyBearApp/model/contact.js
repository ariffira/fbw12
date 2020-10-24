const mongoose=require('mongoose')
var contactSchema = new mongoose.Schema({
    name:String,
    email:{type:String,required: true}, 
    phone:Number,
    message:String,
});

var ContactInfo = mongoose.model('ContactInfo', contactSchema);
module.exports=ContactInfo;