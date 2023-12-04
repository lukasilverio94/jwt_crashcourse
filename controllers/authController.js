const User = require("../models/User");

//Handle Errors
const handleErrors = (err) => {
  let error = {
    email: "",
    password: "",
  };

  //validation errors
  if (err.message.includes("user validation failed")) {
    console.log(Object.values(err.errors));
  }
};

// controller actions
module.exports.signup_get = async (req, res) => {
  res.render("signup");
};

module.exports.login_get = async (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    handleErrors(err);
    res.status(400).send("error, user not created");
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
};
