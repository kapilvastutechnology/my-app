import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const supportedExist = ['.png','.jpg','.jpeg','.gif','.pdf'];
export const checkFile = (req,res,next) => {
    const file = req.files?.image;
    if(!file){
        return res.status(400).json({
             status: 'error',
            data: 'please provide image file'
        })
    }
    const fileExts = path.extname(file.name);
    if(!supportedExist.includes(fileExts)){
        return res.status(400).json({
             status: 'error',
            data: 'please provide image file'
        }) 
    }

    const imagePath = `${uuidv4()}-${file.name}`;

    file.mv(`./uploads/${imagePath}`,(err)=>{
        req.imagePath = imagePath;
        next();
    })

    
}