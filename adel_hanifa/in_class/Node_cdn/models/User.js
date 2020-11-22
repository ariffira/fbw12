const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        firstName: {
            type: String,
            //require: true,
            require: [true, 'Please give your First Name '] 
        },
        lastName: {
            type: String,
            require: [true, 'Please give your Last Name '] 
        },
        middleName: {
            type: String,
        }
    },
    email: {type: String, unique: true},
    password: {type: String},
    country: {type: String},
    country_code: {
        type: String,
        default: 'other',
    },
    age: {
        type: Number,
        min: 16,
        man: 70
    },
    profile_pic: {
        type: Schema.Types.ObjectId,
        ref: 'Picture'
    },
    profile_url: String,
    created_at: {type: Date, default: Date.now()},
    gender: {type: Boolean, default: true},
    role: {type: String, enum: ['admin', 'customer'], default: 'customer',},
    adress: {
        street: String,
        house_no: String,
        zip: Number,
        city: String
    },
    facebookID: String,
    googleID: String,
});

// virtaul: it can get some specific data from schema and return some result
userSchema.virtual('fullName').get(function(){
    return this.name.firstName+' '+this.name.middleName+' '+this.name.lastName;
});

const User = mongoose.model('User', userSchema);
module.exports = User;