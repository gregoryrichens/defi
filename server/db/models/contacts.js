const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: {type: String, required: true},
  contact: {type: Boolean, default: true},
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports.Contact = Contact;