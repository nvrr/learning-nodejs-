//gh
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nvrdb:nvrdb@cluster0.rhfstgb.mongodb.net/")
.then(() => console.log("database connected successfully"))
.catch((e) => console.log(e));

const userShema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {type: Date, default: Date.now}
})

const User = mongoose.model("User", userShema)

async function runQueryExamples() {
  try {
    // const newUser = await User.create({
    //   name: "varma raju",
    //   email: "varma@gmail.com",
    //   age: "25",
    //   isActive: false,
    //   tags: ["dev","desijner", "manajer"],
    // })

    // const newUser = new User({
    //   name: "venkat raju",
    //   email: "venkatraju@gmail.com",
    //   age: "23",
    //   isActive: true,
    //   tags: ["developer","desijner", "manajer"],
    // })

    // await newUser.save()

    // console.log("Created new user", newUser);

    // const c = await User.find({})

    const c = await User.find({isActive: true});

    console.log("users", c)
  } catch (e) {
    console.log("Error =>",e)
  } finally{
    await mongoose.connection.close()
  }
}

runQueryExamples()

// const express = require("express");
// const app = express();

//Middleware
// app.use(express.json());

// let books = [
//   {
//     id: "1",
//     title: "Book 1",
//   },
//   {
//     id: "2",
//     title: "Book 2",
//   },
// ];

// //intro route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Welcome to our bookstore api",
//   });
// });

// //get all books
// app.get("/get", (req, res) => {
//   res.json(books);
// });


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is now running on port ${PORT}`);
// });