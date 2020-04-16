const jwt = require('jsonwebtoken');


module.exports = (req,res,next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, "temporary_secret");
    next();
  } catch(error) {
    res.status(401).json({message: 'Auth failed'});
  }

};