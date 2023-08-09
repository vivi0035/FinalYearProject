import Community from "../models/Community.js";

export const createCommunity = async (req, res, next) => {
    const newCommunity = new Community(req.body);

    try {
        const savedCommunity = await newCommunity.save();
        res.status(200).json(savedCommunity);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const updateCommunity = async (req, res, next) => {
    try {
        const updatedCommunity = await Community.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedCommunity);
    } catch (err) {
        next(err);
    }
}

export const deleteCommunity = async (req, res, next) => {
    try {
        await Community.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Community has been deleted.");
    } catch (err) {
        next(err);
    }
}

export const getCommunity = async (req, res, next) => {
    try {
        const community = await Community.findById(
            req.params.id
        );
        res.status(200).json(community);
    } catch (err) {
        next(err);
    }
}

export const getCommunities = async (req, res, next) => {
    try {
        const communities = await Community.find();
        res.status(200).json(communities);
    } catch (err) {
        next(err);
    }
}