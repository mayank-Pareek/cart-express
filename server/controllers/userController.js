import User from "../models/userSchema.js";
export const userSignup = async (req, res) => {
  try {
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) {
      return res.status(401).json({
        error: "Username already exists",
      });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
