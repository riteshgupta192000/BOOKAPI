const Review = require('../models/Review');

exports.addReview = async (req, res) => {

  const { rating, comment } = req.body;
  const existing = await Review.findOne({ book: req.params.id, user: req.user.id });
  if (existing) return res.status(400).json({ msg: 'Already reviewed' });

  const review = new Review({ book: req.params.id, user: req.user.id, rating, comment });
  await review.save();
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id)
    return res.status(403).json({ msg: 'Not authorized' });

  review.rating = req.body.rating;
  review.comment = req.body.comment;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id)
    return res.status(403).json({ msg: 'Not authorized' });

  await review.deleteOne();
  res.json({ msg: 'Review deleted' });
};
