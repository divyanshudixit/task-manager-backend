// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  const { firstName,lastName,username, password } = req.body;
  console.log("firstName",firstName);
  console.log("lastName",lastName);
  console.log("username",username);
  console.log("password",password);


  let role='user';
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ firstName,lastName,username, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// const login = async (req, res) => {
//   const { username, password } = req.body;
//   console.log("username",username);
//   console.log("password",password);

//   try {
//     const user = await User.findOne({ username });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log("username", username);
  console.log("password", password);

  try {
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Remove sensitive information before sending the user object
    const { password: userPassword, ...userWithoutPassword } = user.toObject();

    res.json({ token, user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// module.exports = login;

module.exports = { register, login };
