
const { Cnabs } = require("../models");

module.exports = async(req, res) => {

  const company = req.params.company;
  let cnabs = [];
  if(!!company) {
    cnabs = await Cnabs.findAll({ where: { company } }) || [];
  }

  res.json(cnabs);

}