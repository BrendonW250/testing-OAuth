const mongoose = require('mongoose')

// When working with promises use async/await instead of .then()
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, { //these prevent errors from popping up in the console
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch (err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB //allows us to run this in the server file