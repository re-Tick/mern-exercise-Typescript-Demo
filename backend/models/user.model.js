const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  email :{
    unique: false
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;