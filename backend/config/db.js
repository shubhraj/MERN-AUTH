import mongoose from "mongoose";

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDB Connected host :  ${conn.connection.host}`);
    } catch (error) {
        console.log(`error is : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;