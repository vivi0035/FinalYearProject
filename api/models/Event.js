import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    photos:{
        type: [String],
    },
    desc:{
        type: String,
        required: true,
    },
    maxParticipant:{
        type: Number,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    startTime:{
        type: String,
        required: true,
    },
    endTime:{
        type: String,
        required: true,
    },
    venue:{
        type: String,
        required: true,
    }
    },
    {timestamps: true

});

export default mongoose.model("Event", EventSchema);