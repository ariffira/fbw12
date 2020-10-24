const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    uFname: String,
        uSname: String,
        uAddress: String,
        uname: String,
        email: String,
        pswd: String,
        imagePath:String,
        remember: String
});
const User=mongoose.model('User',userSchema);

module.exports=User;