const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// =====================================
// REGISTER USER
// =====================================

const registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;


    // Check all fields
    if (!name || !email || !password) {

      return res.status(400).json({
        message: "Please provide name, email and password"
      });

    }


    // Check if user already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase()
    });


    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      });

    }


    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );


    // Create user
    const user = await User.create({

      name: name.trim(),

      email: email.toLowerCase().trim(),

      password: hashedPassword

    });


    // Create JWT
    const token = jwt.sign(

      {
        id: user._id
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );


    res.status(201).json({

      message: "Registration successful",

      token,

      user: {

        id: user._id,

        name: user.name,

        email: user.email

      }

    });


  } catch (error) {

    console.error(
      "Registration error:",
      error.message
    );


    res.status(500).json({

      message: "Server error"

    });

  }

};



// =====================================
// LOGIN USER
// =====================================

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;


    // Check fields
    if (!email || !password) {

      return res.status(400).json({

        message:
          "Please provide email and password"

      });

    }


    // Find user
    const user = await User.findOne({

      email: email.toLowerCase().trim()

    });


    if (!user) {

      return res.status(401).json({

        message:
          "Invalid email or password"

      });

    }


    // Check password
    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );


    if (!passwordMatch) {

      return res.status(401).json({

        message:
          "Invalid email or password"

      });

    }


    // Create JWT
    const token = jwt.sign(

      {
        id: user._id
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );


    res.json({

      message: "Login successful",

      token,

      user: {

        id: user._id,

        name: user.name,

        email: user.email

      }

    });


  } catch (error) {

    console.error(
      "Login error:",
      error.message
    );


    res.status(500).json({

      message: "Server error"

    });

  }

};


module.exports = {

  registerUser,

  loginUser

};