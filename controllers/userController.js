import User from "../modules/user.js"

export const allUser = (req,res)=>{
    return res.status(200).json({data:'get all users'})
}

export const singleUser = (req,res)=>{
    return res.status(200).json({data:'get single user'})
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

