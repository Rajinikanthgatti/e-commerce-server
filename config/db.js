const mongoose = require("mongoose");
const config = require("./keys");
const mongodbURI = config.monogoURI;

const mongoConnection = async() => {
    try{
        await mongoose.connect(mongodbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Data base")
    } catch(err){
        console.log(`Error connecting to Data base ${err}`);
    }
};

module.exports =  mongoConnection;