const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @POST register page
const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Fill all the fileds");
  }
  const emailAvalible = await User.findOne({email});
  if (emailAvalible) {
    res.status(400);
    throw new Error("The email is already registred");
  } 
  // create a hashedPassword
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword:", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`user created suc ${user}`);
  if (user) {
    res.status(201).json({_id:user.id,email:user.email})
  } else {
    res.status(400);
    throw new Errrr("user data not valid")
  }
    res.status(200).json({ message: "register page POST" });
});

// @POST login page
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("email and password are required");
  }
  const user = await User.findOne({ email });
  // compare the entry user and hashedpassword 
  if (user && (await bcrypt.compare(password, user.password))) {
    const accesToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SCRETE,{expiresIn:"1m"}
    );
    res.status(200).json({accesToken})
  } else {
    res.status(401)
    throw new Error ("wrong email or password")
  }
});

 // @GET current User 
const current = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "current page POST" });
});
 module.exports = { register, login, current };