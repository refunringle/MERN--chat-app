const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },

    isAvatarImageSet: {
      type: Boolean,
      default: false,
    },
    avatarImage: {
      type: String,
      default: "",
    },
    created: {
      type: Date,
      default: Date.now,
    }
  }
  // {collection : 'ProductsData' }
);

module.exports = mongoose.model("User", eventSchema);
