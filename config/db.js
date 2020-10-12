const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");


// Connect mongoDB

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false  
        });
        console.log(">>>--| MongoDB CONNECTED |--<<<")
    } catch (err) {
        console.error(err.message);
        console.log(">>>--| Database FAILURE |--<<<")
        // Exit process with failure
        process.exit(1);
    }
    
}

module.exports = connectDB;