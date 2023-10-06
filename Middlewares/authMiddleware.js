const jwt = require('jsonwebtoken');
const CivilianModel = require('../Model/user.model');

const ExistingUser = async (req, res, next) => {
  try {
    const headertoken = req.headers.authorization;

    if (!headertoken) {
      return res.status(500).json({ message: "Invalid authorization header" });
    }

    const [bearerKeyword, token] = headertoken.split(' ');

    if (bearerKeyword.toLowerCase() !== 'bearer' || !token) {
      return res.status(500).json({ message: "Unauthorized token" });
    }

    const decodedtoken = jwt.verify(token, "121212WE");
    const civilian = await CivilianModel.findById(decodedtoken.id);

    if (civilian) {
      req.civilian = civilian;
      next();
    } else {
      return res.status(404).json("User Not found !");
    }

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { ExistingUser };
