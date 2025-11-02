export const notAllowed = (req,res)=>{
    return res.status(405).json({
        status: 'error',
        data: 'method not all'
    })
 };