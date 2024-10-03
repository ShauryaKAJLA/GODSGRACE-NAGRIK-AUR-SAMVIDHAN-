import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Server is connected to data base: ",connectionInstance.connection.host)
        return true;
    } catch (error) {
        console.log("There was a problem while connecting to the data base",error.message)
        return error
    }
}

export default connectDB