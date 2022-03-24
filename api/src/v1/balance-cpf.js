
const { Cnabs } = require("../models");

module.exports = async(req, res) => {

  const cpf = req.params.cpf;
  let balance = 0;
  if(!!cpf) {
    balance = await Cnabs.sum('amount', { where: { cpf } }) || 0;
    if(balance > 0) {
      balance = balance / 100
    }

  }

  res.json(balance);

}