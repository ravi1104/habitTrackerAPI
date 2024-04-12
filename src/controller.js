const Habit = require('./model');
const mongoose = require('mongoose');
// Create a new habit
exports.createHabit = async (req, res) => {
    const { date, habit } = req.body;

    try {
        // Find a document with the given date, or create a new one if it doesn't exist (upsert)
        const data = await Habit.findOneAndUpdate(
            { date },
            { $push: { habit: habit } }, // Push the new habit object into the habit array
            { upsert: true, new: true }
        );
        // Respond with the saved habit data
        res.status(201).json(data);
    } catch (err) {
        // Handle any errors that occur during the creation process
        res.status(400).json({ message: err.message });
    }
};



// Get all habits
exports.getAllHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getHabitsForDay = async (req, res) => {
    // Extract the day parameter from the request URL
    const day = req.params.day;

    try {
        // Find habits for the specified day
        const habits = await Habit.find({ date: day });

        // Respond with the habits data
        res.status(200).json(habits);
    } catch (err) {
        // Handle any errors that occur during the retrieval process
        res.status(500).json({ message: err.message });
    }
};
exports.updateStatus = async (req, res) => {
    // Extract the day parameter from the request URL
    const { id, status } = req.query;

    try {
        // Find habits for the specified day
        const updatedHabit = await Habit.findOneAndUpdate(
            { 'habit._id': new mongoose.Types.ObjectId(id) }, // Match documents where habit array contains object with specified _id
            { $set: { 'habit.$.status': status } }, // Update the status of the matching habit object
            { new: true } // Return the updated document
        );
        console.log(status);
        res.status(200).json(updatedHabit);
    } catch (err) {
        console.log(err.message);
        // Handle any errors that occur during the retrieval process
        res.status(500).json({ message: err.message });
    }
};

