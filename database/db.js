const mongoose = require('mongoose')

const connectToDB = async () => {
    try{
    await mongoose.connect('mongodb+srv://nvrdb:nvrdb@cluster0.rhfstgb.mongodb.net/');
    console.log('mongodb is connected successfully!');
    } catch (error) {
       console.error('mongodb connection failed', error);
       process.exit(1)
    }
}

module.exports = connectToDB;
