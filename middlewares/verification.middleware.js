const { 
  nameVerification,
  passwordVerification,
} = require('../utils/verifications');

const verification = (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const nameIsValid = nameVerification(firstName, lastName);
    const passwordIsValid = passwordVerification(password);

    if (nameIsValid)
      return res.status(nameIsValid.status).json({ message: nameIsValid.message });

    if(passwordIsValid)
      return res.status(passwordIsValid.status).json({message: passwordIsValid.message })

    next();
  }catch (e) {
    console.log(e.message);
    next(e);
  }
};

module.exports = {
  verification,
};
