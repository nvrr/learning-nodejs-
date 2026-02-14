const mongoose = require('mongoose')

const connectToDB = async () => {
    try{
    await mongoose.connect('mongodb+srv://thevenkatraju_db_user:3wmW647MdeI0swGO@booksonlinecluster.hoteep4.mongodb.net/');
    console.log('mongodb is connected successfully!');
    } catch (error) {
       console.error('mongodb connection failed', error);
       process.exit(1)
    }
}

module.exports = connectToDB;
