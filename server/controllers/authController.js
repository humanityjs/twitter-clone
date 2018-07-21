const auth = require('../models').User

module.exports = {
  signUp: function (req, res) {
    const {
      first_name,
      last_name,
      email,
      password
    } = req.body;
    auth.create({
      first_name,
      last_name,
      email,
      password
    }).then((result) => {
      console.log(result)
      res.send('Yes')
    })
  }
}