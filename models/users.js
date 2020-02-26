const mongoose = require( "mongoose" );

const userSchema = mongoose.Schema( {
  username: {
    type: String,
    unique: true,
    required: true
  },

  email: {
    type: String
  },

  googleId: {
    type: String
  },

  facebookId: {
    type: String
  },

  githubId: {
    type: String
  },

  avatar: {
    type: String
  }
} );

module.exports = mongoose.model( "User", userSchema );
