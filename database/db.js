const mongoose = require('mongoose');

// Get the MongoDB URI from the configuration file
const dbURI = process.env.MONGO_URI

// Function to connect to MongoDB
const connectDB = async () => {

    // Connect to MongoDB
    await mongoose.connect(dbURI)
        .then(() => console.log('MongoDB connected successfully'))
        .catch((error) => {
            console.log('Error connecting to MongoDB: error message =>', error.message)
            process.exit(1)
        })
};

module.exports = connectDB;