import User from "../modules/User.js"
import fs from 'fs';
export const allUser = async (req,res)=>{
    try {
        const user = await User.find({});
        return res.status(200).json({data:user})
    } catch (err) {
        return res.status(400).json({data:err.message})
    }
}

export const singleUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json({status: 'success', data: user})
    } catch (err) {
        return res.status(500).json({data: err.message})
    }
}
export const createUser = async (req,res)=>{
    const {name, age, course, image} = req.body ?? {};
        console.log(req.imagePath);
    try {
        await User.create({
            name,
            age,
            course,
            image:req.imagePath
        });

        return res.status(201).json({
            status: 'success',
            data: 'user successfully added'
        })
    } catch (err) {
        fs.unlink(`./uploads/${req.imagePath}`, (error) =>{
            return res.status(400).json({
            status: 'err',
            data: err.message
        })
        })
    }
}

export const updateUser = (req,res)=>{
    return res.status(200).json({data:'update user'})
}

export const deleteUser =async (req,res)=>{
    try {
        const isExist =  await User.findById(req.id);
        if(!isExist) return res.status(404).json({
            status:'error',
            data:'product not found'
        });
        fs.unlink(`./uploads/${isExist.image}`, async(err)=>{
          await isExist.deleteOne();
          return res.status(200).json({
            status: 'success',
            data:'product deleted successfully'
          })
        })
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            data: err.message
        })
    }
}

