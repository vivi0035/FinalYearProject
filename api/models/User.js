import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        unique: true,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    programme:{
        type: String,
    },
    img:{
        type: String,
        default:""
    },
    status:{
        type: String,
    },
    role:{
        type: String,
    },
    isLeader:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isAlumni:{
        type: Boolean,
        default: false,
    },
    about: {
        type: String,
    },
    followings: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    community: {
      type: Array,
      default: [],
    },
    coverPicture: {
        type: String,
        default: "",
    },

    },
    {timestamps: true}
);

export default mongoose.model("User", UserSchema);