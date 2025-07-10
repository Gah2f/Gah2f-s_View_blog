import mongoose, { connect } from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=>{
            console.log("MongoDB Connected!")
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/danielnebiyuneb`)
    } catch (error) {
        console.log("MongoDB Error:" , error.message)
    }
}

export default connectDB;