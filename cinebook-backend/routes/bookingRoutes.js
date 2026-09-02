const express = require("express");
const Booking = require("../models/Booking");
const protect = require("../middleware/authMiddleware");

const router = express.Router();


// ==========================================
// CREATE BOOKING
// POST /api/bookings
// ==========================================

router.post("/", protect, async (req, res) => {

  try {

    const {
      movieId,
      movieTitle,
      date,
      showTime,
      seats,
      totalAmount
    } = req.body;


    // Validate required fields

    if (
      !movieId ||
      !movieTitle ||
      !date ||
      !showTime ||
      !seats ||
      seats.length === 0 ||
      totalAmount === undefined
    ) {

      return res.status(400).json({
        message: "Please provide all booking details"
      });

    }


    // Create booking

    const booking = await Booking.create({

      user: req.user.id,

      movieId,
      movieTitle,
      date,
      showTime,
      seats,
      totalAmount

    });


    res.status(201).json({

      message: "Booking successful",

      booking

    });

  } catch (error) {

    console.error("Booking Error:", error);

    res.status(500).json({

      message: "Server error while creating booking"

    });

  }

});


// ==========================================
// GET MY BOOKINGS
// GET /api/bookings/my
// ==========================================

router.get("/my", protect, async (req, res) => {

  try {

    const bookings = await Booking.find({

      user: req.user.id

    }).sort({

      createdAt: -1

    });


    res.json({

      bookings

    });

  } catch (error) {

    console.error("Get Bookings Error:", error);

    res.status(500).json({

      message: "Server error while getting bookings"

    });

  }

});


// ==========================================
// GET SINGLE BOOKING
// GET /api/bookings/:id
// ==========================================

router.get("/:id", protect, async (req, res) => {

  try {

    const booking = await Booking.findOne({

      _id: req.params.id,

      user: req.user.id

    });


    if (!booking) {

      return res.status(404).json({

        message: "Booking not found"

      });

    }


    res.json({

      booking

    });

  } catch (error) {

    console.error("Get Booking Error:", error);

    res.status(500).json({

      message: "Server error"

    });

  }

});


// ==========================================
// CANCEL BOOKING
// DELETE /api/bookings/:id
// ==========================================

router.delete("/:id", protect, async (req, res) => {

  try {

    const booking = await Booking.findOne({

      _id: req.params.id,

      user: req.user.id

    });


    if (!booking) {

      return res.status(404).json({

        message: "Booking not found"

      });

    }


    await booking.deleteOne();


    res.json({

      message: "Booking cancelled successfully"

    });

  } catch (error) {

    console.error("Cancel Booking Error:", error);

    res.status(500).json({

      message: "Server error while cancelling booking"

    });

  }

});


module.exports = router;