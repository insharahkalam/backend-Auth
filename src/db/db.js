import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log("database is connected!");

    } catch (error) {
        console.log("Error in connecting DB!", error);
    }
}

export default connectDB