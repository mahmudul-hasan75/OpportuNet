import mongoose from "mongoose";

//Function to connect to the Mongo database
const_connectDB=async()=>{
mongoose.connection.on('connected',() =>console.log('database Connected'))


await mongoose.connect('${process.env.MONGODB_URI}/OpportuNet')
}

export default connectDb
