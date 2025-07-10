import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token  = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.json({success: false, message: "Invalid token"})
  }
};

export default auth