const mongoose=require('mongoose')
var emailSchema = new mongoose.Schema({
    email:String, 
    date: { type: Date, default: Date.now }
});

var contactEmail = mongoose.model('contactEmail', emailSchema);
module.exports=contactEmail;