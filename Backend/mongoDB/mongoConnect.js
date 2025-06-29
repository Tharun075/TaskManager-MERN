const mongoose = require('mongoose')

const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected!")
    }
    catch(error){
        console.log("Failed to connect to MongoDB: ",error)
    }
}
module.exports = connectToDB