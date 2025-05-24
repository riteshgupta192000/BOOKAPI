const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));
app.use('/api/auth', authRoutes);

app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
