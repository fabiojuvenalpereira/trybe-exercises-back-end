const nameVerification = (firstName, lastName) => {
  const re = /([1-9])\w+/;

  if(!firstName || firstName.length < 6) return (
    {
      message: 'o nome precisa estar preenchido e precisa de no mínimo 6 caracteres',
      status: 406,
    }
  )

  if(firstName.match(re) || lastName.match(re)) return (
    {
      message: 'o nome não pode conter números',
      status: 406,
    }
  )
};

const passwordVerification = (password) => {
  if(!password || password.length < 6) return (
    {
      message: "O campo 'password' deve existir e ter pelo menos 6 caracteres",
      status: 403,
    }
  )
};

module.exports = {
  nameVerification,
  passwordVerification
};