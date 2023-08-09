import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
    if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
    
}

// export const getUser = async (req, res, next) => {
//     try {
//         const user = await User.findById(
//             req.params.id
//         );
//         res.status(200).json(user);
//     } catch (err) {
//         next(err);
//     }
// }

export const getUser = async (req, res, next) => {
  const userId = req.query.userId;
  const username = req.query.username;
    try {
      const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
    } catch (err) {
        next(err);
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

export const getFriends = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, img } = friend;
      friendList.push({ _id, username, img });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
};

export const followUser = async (req, res, next) => {
    if (req.body.userId !== req.params.id) {
        try {
          const user = await User.findById(req.params.id);
          const currentUser = await User.findById(req.body.userId);
          if (!user.followers.includes(req.body.userId)) {
            await user.updateOne({ $push: { followers: req.body.userId } });
            await currentUser.updateOne({ $push: { followings: req.params.id } });
            res.status(200).json("user has been followed");
          } else {
            res.status(403).json("you already follow this user");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(403).json("you cant follow yourself");
      }
    };

export const unfollowUser = async (req, res, next) => {
        if (req.body.userId !== req.params.id) {
          try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
              await user.updateOne({ $pull: { followers: req.body.userId } });
              await currentUser.updateOne({ $pull: { followings: req.params.id } });
              res.status(200).json("user has been unfollowed");
            } else {
              res.status(403).json("you dont follow this user");
            }
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(403).json("you cant unfollow yourself");
        }
      };