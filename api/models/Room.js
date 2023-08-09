import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
    desc:{
        type: String,
        required: true,
    },
    maxUsers:{
        type: Number,
        required: true,
    },
    booked:[{unavailableDate : {type: Date}, unavailableTimeslots: {type:[String]}}],
    },
    {timestamps: true

});

export default mongoose.model("Room", RoomSchema);