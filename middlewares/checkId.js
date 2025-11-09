import mongoose from "mongoose";

export const checkId = (req, res, next) =>{
    const {id}  = req.params;
    console.log(mongoose.isValidObjectId())
    if(!mongoose.isValidObjectId(id))
        return res.status(400).json({
        status: 'err',
        data: 'please provide valid id'
    })
    req.id = id;
    next();
}