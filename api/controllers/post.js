import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res, next) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const updatePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");

    } else {
        res.status(403).json("you can update only your post");
      }
    } catch (err) {
        next(err);
    }
}

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
        res.status(200).json("Post has been deleted.");
    } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
        next(err);
    }
}

export const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(
            req.params.id
        );
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
}

//get timeline posts
export const getPosts = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
          currentUser.followings.map((friendId) => {
            return Post.find({ userId: friendId });
          })
        );
        res.status(200).json(userPosts.concat(...friendPosts))
      } catch (err) {
        next(err);
      }
}

//get user's all posts
export const getUserPosts = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
      } catch (err) {
        res.status(500).json(err);
      }
    }

//like and dislike a post
export const likePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("the post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("the post has been disliked");
        }
    } catch (err) {
        next(err);
    }
}