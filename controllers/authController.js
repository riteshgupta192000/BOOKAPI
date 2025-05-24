const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username });
  if (user) return res.status(400).json({ msg: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  user = new User({ username, password: hashed });
  await user.save();

  res.status(201).json({ msg: 'User registered' });
};

exports.login = async (req, res) => {

  const { username, password } = req.body;


  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ msg: 'Invalid credentials' });

  const payload = { user: { id: user._id } };

  const token = jwt.sign(payload, "jaishreeram", { expiresIn: '1h' });

  res.json({ token });
};
