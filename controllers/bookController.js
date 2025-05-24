const Book = require('../models/Book');

const mongoose = require('mongoose');

exports.addBook = async (req, res) => {

  const book = new Book(req.body);

  await book.save();

  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 5 } = req.query;
  const query = {};
  if (author) query.author = new RegExp(author, 'i');
  if (genre) query.genre = genre;

  const books = await Book.find(query).skip((page - 1) * limit).limit(+limit);
  res.json(books);
};






exports.getBookById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Invalid book ID' });
  }

  const book = await Book.findById(id).populate('reviews');
  if (!book) return res.status(404).json({ msg: 'Book not found' });

  const avgRating = book.reviews.length
    ? book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length
    : 0;

  res.json({ book, avgRating });
};



exports.searchBooks = async (req, res) => {
  const { q } = req.query;
  const books = await Book.find({
    $or: [
      { title: new RegExp(q, 'i') },
      { author: new RegExp(q, 'i') },
    ],
  });
  res.json(books);
};
