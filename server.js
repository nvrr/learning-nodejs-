require("dotenv").config();
const express = require('express');
const connectToDB = require('./database/db')
//Book
const bookRoutes = require('./routes/book-router')
//addin autj
const authRoutes = require("./routes/auth-routes");


//
const homeRoutes = require("./routes/home-routes");
const adminRoutes = require("./routes/admin-routes");
// const uploadImageRoutes = require("./routes/image-routes");



const app = express()
const PORT = process.env.PORT || 3000;

//connect to our db
connectToDB()

//middleware => express.json
app.use(express.json());

//routes here
//book
app.use('/api/books',bookRoutes)
//autj
app.use("/api/auth", authRoutes);
//welcome
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
})

//gh ''



//thevenkatraju_db_user
//3wmW647MdeI0swGO
//mongodb+srv://thevenkatraju_db_user:<db_password>@booksonlinecluster.hoteep4.mongodb.net/