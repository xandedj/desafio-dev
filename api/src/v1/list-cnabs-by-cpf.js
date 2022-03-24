
const { Cnabs } = require("../models");

module.exports = async(req, res) => {

  const cpf = req.params.cpf;
  let cnabs = [];
  if(!!cpf) {
    cnabs = await Cnabs.findAll({ where: { cpf } }) || [];
  }

  res.json(cnabs);

}