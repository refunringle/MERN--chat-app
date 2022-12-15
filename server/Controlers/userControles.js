const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({ msg: "User Allready Exists", status: false });
    }
    const user = await User.create({
      userName: username,
      email: email,
      password: encryptedPassword,
    });
    console.log(username, "username");

    delete user.password
    return res.json({ status : true , user})

  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
};
