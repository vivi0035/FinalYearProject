import mongoose from 'mongoose';

const eventRegistrationSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    eventId:{
        type: String,
        required: true,
    }
    },
    {timestamps: true

});

export default mongoose.model("eventRegistration", eventRegistrationSchema);