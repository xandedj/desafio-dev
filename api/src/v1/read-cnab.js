
const { Cnabs } = require("../models");

module.exports = async(req, res) => {

  const id = req.params.id;
  let cnab = {};
  if(!!id) {
    cnab = await Cnabs.findOne({ where: { id } }) || {};
  }

  res.json(cnab);

}