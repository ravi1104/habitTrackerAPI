const mongoose = require('mongoose');

const uri = "mongodb+srv://ravi:4298@atlascluster.tlcgbgf.mongodb.net/habitTracker?retryWrites=true&w=majority";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

module.exports = { connectToDatabase };