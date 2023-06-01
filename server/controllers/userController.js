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

export const userLogin = async (req, res) => {
  try {
    let user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res.status(200).json(`${username} logged in successfully`);
    } else {
      return res.status(401).json("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
