const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    movieId: {
      type: String,
      required: true
    },

    movieTitle: {
      type: String,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    showTime: {
      type: String,
      required: true
    },

    seats: {
      type: [String],
      required: true
    },

    totalAmount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);