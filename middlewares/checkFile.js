import path from 'path';
import {v4 as uuidv4} from 'uuid';
const supportedExts = ['.png', '.jpg', '.jpeg', '.gif'];
export const checkFile = (req,res,next) =>{
    const file = req.files?.image;
    if(!file)
        res.status(400).json({
            status: 'err',
            data: 'please provide image file'
        });

        const fileExts = path.extname(file.name);
        if(!supportedExts.includes(fileExts))
             res.status(400).json({
            status: 'err',
            data: 'please provide valid image file'
        });
        
        const imagePath = `${uuidv4}-${file.name}`;
        file.mv(`./uploads/${imagePath}`,(err)=>{
            req.imagePath = imagePath;
            next();
        })
    
}