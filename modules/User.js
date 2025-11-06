import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    image:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required: true
    },

    course:{
        type:String,
        enum: ["BCA", "DICS", "MCA"],
        required: true
    }

},{timeseries:true})


const User = mongoose.model('User', userSchema);

export default User;