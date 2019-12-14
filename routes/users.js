const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  User.find((err, user) => {
    // eslint-disable-next-line no-console
    if (err) return console.error(err);
    return res.json(user);
  });
});

router.post('/', (req, res) => {
  const user = new User({
    firstName: req.body.user.firstName,
    lastName: req.body.user.lastName,
    email: req.body.user.email,
    illness: req.body.illness.name,
    severity: req.body.severity,
  });
  user.save((err, newUser) => {
    // eslint-disable-next-line no-console
    if (err) return console.error(err);
    return res.json(newUser);
  });
});

module.exports = router;
