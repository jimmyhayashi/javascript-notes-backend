var express = require('express');
var router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const WithAuth = require('../middlewares/auth');
require('dotenv').config();
const secret = process.env.JWT_TOKEN; 

router.post('/register', async(req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Error registering new user'});
  }
})


router.post('/login', async(req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if(!user)
      res.status(401).json({error: 'Incorrect email or password'})
    else {
      user.isCorrectPassword(password, function(err, same) {
        if(!same)
          res.status(401).json({error: 'Incorrect email or password'})
        else {
          const token = jwt.sign({email}, secret, { expiresIn: '10d' }) //expire after 10 days
          res.json({user: user, token: token})
        }
      })
    }
  } catch (error) {
    res.status(500).json({error: 'Internal error, please try again'})
  }
})

router.put('/', WithAuth,  async (req, res) => {
  const { name, email } = req.body;
  try {
    var user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: { name: name, email: email } },
      { upsert: true, new: true }
    );
    res.json({ message: 'OK' }).status(201);
    //res.json(user);
  } catch (error) {
    res.status(401).json({error: 'Internal error, please try again'})
  } 
})

router.put('/password', WithAuth, async function(req, res) {
    const { password } = req.body;
    try {
        var user = await User.findOne({ _id: req.user.id });
        user.password = password;
        await user.save();
        res.json({ message: 'OK' }).status(201);
        //res.json(user);
    } catch (error) {
        res.status(401).json({error: 'Internal error, please try again'})
    }
})

router.delete('/', WithAuth, async(req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.user.id });
    res.json({ message: 'OK' }).status(201);
  } catch (error) {
    res.status(500).json({ error: 'Problem to delete the user' });
  }
})

module.exports = router;
