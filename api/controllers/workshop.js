import Workshop from "../models/Workshop.js";

export const createWorkshop = async (req, res, next) => {
    const newWorkshop = new Workshop(req.body);

    try {
        const savedWorkshop = await newWorkshop.save();
        res.status(200).json(savedWorkshop);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const updateWorkshop = async (req, res, next) => {
    try {
        const updatedWorkshop = await Workshop.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedWorkshop);
    } catch (err) {
        next(err);
    }
}

export const deleteWorkshop = async (req, res, next) => {
    try {
        await Workshop.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Workshop has been deleted.");
    } catch (err) {
        next(err);
    }
}

export const getWorkshop = async (req, res, next) => {
    try {
        const workshop = await Workshop.findById(
            req.params.id
        );
        res.status(200).json(workshop);
    } catch (err) {
        next(err);
    }
}

export const getWorkshops = async (req, res, next) => {
    const {max, ...others} = req.query;
    try {
        const workshops = await Workshop.find({
            ...others,
            maxUsers: {$gte: max || 1, $lt: 99 },
        }).limit(req.query.limit);
        res.status(200).json(workshops);
    } catch (err) {
        next(err);
    }
}