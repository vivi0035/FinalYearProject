import mongoose from 'mongoose';

const WorkshopRegistrationSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    workshopId:{
        type: String,
        required: true,
    }
    },
    {timestamps: true

});

export default mongoose.model("WorkshopRegistration", WorkshopRegistrationSchema);