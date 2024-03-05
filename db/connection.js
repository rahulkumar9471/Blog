const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/webkledges`, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Add this line to avoid deprecation warning
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
