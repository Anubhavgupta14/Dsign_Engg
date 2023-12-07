const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
    default: ""
  },
  addressLine1: {
    type: String,
    required: false,
    default:""
  },

  addressLine2: {
    type: String,
    required: false,
    default:""
  },
  state: {
    type: String,
    required: false,
    default:""
  },
  pincode: {
    type: String,
    required: false,
    default: ""
  },
  basicProfile: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    default: "",
  },
  twitter: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  ladle_ticket:{
    type: Number,
    default: 0
  },
  aod_ticket:{
    type: Number,
    default: 0
  },
  role:{
    type: String,
    default: "user"
  },
  country:{
    type: String,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiryExpiry: Date,
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
