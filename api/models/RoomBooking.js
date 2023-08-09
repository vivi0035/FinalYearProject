import mongoose from 'mongoose';

const RoomBookingSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    roomId:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    timeslot:{
        type: String,
    }
    },
    {timestamps: true

});

export default mongoose.model("RoomBooking", RoomBookingSchema);