const model = require('../models/contacts.js');

const createContact = async (req, res) => {
  console.log(req.body);
  try {
    await model.Contact.create(req.body);
    res.sendStatus(201);
  } catch(err) {
    res.status(406).send(err);
  }
};

module.exports.createContact = createContact;