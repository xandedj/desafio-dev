
const { Cnabs } = require("../models");

module.exports = async(req, res) => {

  const id = req.params.id;
  let cnab = {};

  if(!!id) {
    const Cnab = await Cnabs.findByPk(id) || {};
    if(Cnab.hasOwnProperty('dataValues')) {
      cnab = await Cnab.destroy(id) || {}
    }
  }

  res.json(cnab);

}