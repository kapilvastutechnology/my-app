import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    course:{
        type:String,
        enum:['BCA', 'DICS', 'BTCES']
    }
},{timestamps:true})


const User = mongoose.model('User',userSchema);
export default User;