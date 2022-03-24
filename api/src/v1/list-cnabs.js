
const { Cnabs } = require("../models");

module.exports = async(req, res) => {

  const cnabs = await Cnabs.findAll() || [];
  res.json(cnabs);

}