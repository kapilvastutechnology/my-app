import User from "../modules/user.js"

export const allUser = async (req,res)=>{
    try {
        const user = await User.find({});
        return res.status(200).json({data:user})
    } catch (err) {
        return res.status(500).json({data:err.message})
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
    const { username, age, course } = req.body ?? {};
    try {
        const user = await User.create({
            username,
            age,
            course
        });
        return res.status(201).json({status:'success', data:'User added successfully'})
    } catch (err) {
        return res.status(400).json({
            status:'error',
            data: err.message
        })
    }
}


export const updateUser = (req,res)=>{
    return res.status(200).json({data:'update user'})
}

export const deleteUser = (req,res)=>{
    return res.status(200).json({data:'delete users'})
}

