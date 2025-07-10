import fs from 'fs'
import imagekit from '../Configs/imagekit.js';
import Blog from '../Models/Blog.js';

export const addBlog = async (req,res)=>{
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;
        
        if (!title ||  !description || !category || !imageFile) {
            return res.json({success: false, message: "Missing requied fields"})
        } 

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/blogs'
        })
        
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'}
            ]
        }) 

        const image = optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, image, isPublished}) 
        res.json({success: true, message: "Blod added successfully"})
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}