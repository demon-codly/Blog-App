import Comment from "../models/comment.model.js"
import User from "../models/user.model.js"

export const getPostComments = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.postId })
            .populate("user", "username img")
            .sort({ createdAt: -1 }); 

        res.json(comments);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export const addComment = async (req, res)=>{
    const {userId: clerkUserId} = req.auth();
    const postId = req.params.postId

    if(!clerkUserId){
        return res.status(401).json("Not authenticated!")
    }
    
    const user = await User.findOne({ clerkUserId });

    const newComment = new Comment({
        ...req.body,
        user: user._id,
        post: postId,
    });

    const savedComment = await newComment.save();

    setTimeout(()=>{
        res.status(201).json(savedComment);
    }, 3000);

    
    
}

export const deleteComment = async (req, res)=>{
    const {userId: clerkUserId} = req.auth();
    const id = req.params.id

    if(!clerkUserId){
        return res.status(401).json("Not authenticated!")
    }

    const user = User.findOne({ clerkUserId });

    const deletedComment = await Comment.findOneAndDelete({_id:id, user:user._id})

    if(!deletedComment){
        return res.status(403).json("you can only delete your comments")
    }


    res.status(201).json("comment deleted");
}