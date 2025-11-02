export const getUsers = (req, res) => {
    return res.status(200).json({
        data: 'all users'
    })
};

export const getUser = (req, res) => {
     return res.status(200).json({
        data: 'get single users'
    })
};

export const createUser = (req, res) => {
     return res.status(200).json({
        data:'add user'
    })
};

export const updateUser =  (req, res) => {
     return res.status(200).json({
        data:'update User'
    })
};

export const deleteUser =  (req, res) => {
     return res.status(200).json({
        data:'delete USER'
    })
};