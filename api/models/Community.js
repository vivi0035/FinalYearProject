import mongoose from 'mongoose';

const CommunitySchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true,
        unique: true,
    },
    img:{
        type: String,
        default:""
    },
    about: {
        type: String,
    },
    followers: {
      type: Number,
    },
    rules: {
        type: String,
    }
    },
    {timestamps: true}
);

export default mongoose.model("Community", CommunitySchema);