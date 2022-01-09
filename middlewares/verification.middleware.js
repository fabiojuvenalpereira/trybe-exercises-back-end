const { nameVerification } = require('../utils/verifications');

const verification = (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body; 
    const nameTest = nameVerification(firstName);

    if (nameTest) return res.status(nameTest.status).json({ message: nameTest.message });
    
    next();
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

module.exports = {
  verification,
}
