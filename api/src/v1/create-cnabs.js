
const Cnab = require("../shared/Cnab");
const { Cnabs } = require("../models");

module.exports = async(req, res) => {
  
  let result = [];
  const body = req.body;

  if(!!body && body?.length > 0) {
    for await (cnab of body) {
      let feedback = await Cnabs.create(cnab);	
      result.push(feedback);
    }
  }

  res.status(201);
}