import mongoose from 'mongoose';

const WorkshopSchema = new mongoose.Schema({
    title:{
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
    maxParticipant:{
        type: Number,
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

export default mongoose.model("Workshop", WorkshopSchema);