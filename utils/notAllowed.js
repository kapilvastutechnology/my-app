
export const notAllowed = (req,res) =>{
    return res.status(400).json({
        status:'Error',
        data: 'method not allwed'
    })
}