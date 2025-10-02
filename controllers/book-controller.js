const Book = require('../models/book');

const getAllBooks = async (req, res) => {
   try {
const allBooks = await Book.find({});
if(allBooks?.length > 0){
    res.status(200).json({
        success: true,
        message: 'List of books fetched successfuly',
        data: allBooks
    }) 
}  else{
    res.status(404).json({
        success: false,
        message: 'No books found in collection'
    })
}
   } catch(e) {
    console.log(e)

    res.status(500).json({
        success: false,
        message: 'Something went wrong, pls try again'
    })
   }
}

const getSingleBookById = async (req, res) => {
    try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    if(!bookDetailsByID){
        return res.status(404).json({
            success: false,
            message: 'Book current id not found, try anotjer'
        })
    }

    res.status(200).json({
        success: true,
        data: bookDetailsByID
    })
   } catch(e) {
       console.log(e);
       res.status(500).json({
        success: false,
        message: 'Something went wrong, pls try again'
    })
   
   }
}



const addNewBook = async (req, res) => {
    try {
     const newBookFormData = req.body
     const newlyCreatedBook = await Book.create(newBookFormData)

     if(newlyCreatedBook){
        res.status(200).json({
            success:true,
            message:'Book added successfully',
            data: newlyCreatedBook
        })
     }
    } catch(e) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong, pls try again'
        })
       }
}
const updateBook = async (req, res) => {
    try {
       const updatedBookFormData = req.body
       const getCurrentBookID = req.params.id

       const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFormData, {
        new: true
       });

       if (!updatedBook){
        res.status(404).json({
            success: false,
            message: 'Book is not found witj ID'
        })
       }

       res.status(200).json({
        success: true,
        message:'Book updated successfully'
       })

    } catch(e) {
        console.log(e);
        res.status(500).json({
         success: false,
         message: 'Something went wrong, pls try again'
     })
    }
}

// gh ''
const deleteBook = async (req, res) => {
    try {
   const bookId = req.params.id
   const deletedBook = await Book.findByIdAndDelete(bookId);

   if(!deleteBook){
    res.status(404).json({
        success: false,
        message: 'Book is not found witj tjis id'
    })
   }

   res.status(200).json({
    success: true,
    data: deletedBook
   })
    } catch(e) {
        console.log(e);
        res.status(500).json({
         success: false,
         message: 'Something went wrong, pls try again'
     })
    }
}

module.exports = {
    getAllBooks, addNewBook, deleteBook,getSingleBookById,updateBook
}

// gh ''