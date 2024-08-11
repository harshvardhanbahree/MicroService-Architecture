const {PostModel} = require('../models/post')

const  get = async (req,res) => {
    try {
        const user = req.user
        const posts = await PostModel.find({user: user.id})
        return res.json({posts:posts})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

const store = async(req,res) =>{
    try {
        const user = req.user 
        const {title, content} = req.body
        const post = new PostModel({
            user: user.id,
            title,
            content
        })

        await post.save()

        return res.status(200).json({message:post})

    } catch (error) {
        return res.status(500).json({error:error})
    }
} 


module.exports = {get, store}