const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === null || !authHeader) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ message: "UnAuthorized" });

    req.user = payload;
    next();
  });
};

module.exports = { authMiddleware };
