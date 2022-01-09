const nameVerification = (name) => {
  const re = /([1-9])\w+/;

  if(!name || name.length < 3) return (
    {
      message: 'o nome precisa estar preenchido e precisa de no mínimo 3 caracteres',
      status: 406,
    }
  )

  if(name.match(re)) return (
    {
      message: 'o nome não pode conter números',
      status: 406,
    }
  )

}

module.exports = {
  nameVerification,
};