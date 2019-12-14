const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  illness: {
    type: String,
    required: true,
  },
  severity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
