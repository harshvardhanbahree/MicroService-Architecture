const bcrypt = require("bcrypt");
const { AuthMicroModel } = require("../models/auth");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const payload = req.body;

    const salt = await bcrypt.genSalt(10);
    let encryptedPassword = bcrypt.hashSync(payload.password, salt);
    const user = new AuthMicroModel({
      name: payload.name,
      email: payload.email,
      password: encryptedPassword,
    });
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
  }
  res.status(500).json({ message: "Something went wrong" });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthMicroModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    if (user) {
      if (!(await bcrypt.compare(password, user.password))) {
        res.status(400).json({ message: "Invalid Credentials" });
      }

      const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });
      return res.json({
        mesage: "Login Successfull",
        accessToken: `Bearer ${token}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const user = async(req,res) =>{
  const user = req.user

  return res.status(200).json({user:user});
}
module.exports = { register, login, user };
