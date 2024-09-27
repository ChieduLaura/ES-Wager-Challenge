// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use your own MongoDB connection string (either locally or from MongoDB Atlas)
    const conn = await mongoose.connect('mongodb://localhost:27017/challengeApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
