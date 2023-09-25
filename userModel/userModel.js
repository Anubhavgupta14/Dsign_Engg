const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
        unique: true,
    },
    dob:{
        type: Date,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true,
    },
    isVerfied:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry : Date,
    verifyToken: String,
    verifyTokenExpiryExpiry: Date,
})

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.models.users || mongoose.model
("users",userSchema);

export default User;