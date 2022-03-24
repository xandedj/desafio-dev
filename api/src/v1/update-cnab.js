
const { Cnabs } = require("../models");

module.exports = async(req, res) => {

  const id = req.params.id;
  const body = req.body;
  
  let cnab = {};

  if(!!id && !!body) {
    const Cnab = await Cnabs.findByPk(id) || {};
    const keys = Object.keys(body);
    keys.forEach((key) =>{ Cnab[key] = body[key] });  
    cnab = await Cnab.save() || {};
  }

  res.json(cnab);

}