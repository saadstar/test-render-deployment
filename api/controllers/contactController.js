const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc get all contacts
// @route GET /api/contact
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
// @desc add a new contact
// @route POST /api/contact
const postContact =asyncHandler(async (req, res) => {
  const { username, email,phone } = req.body;
  if (!username || !email|| !phone) {
    res.status(400);
    throw new Error("All filed are required")
  }
  const contact = await Contact.create({
    username,
    email,
    phone,
  })
  res.status(201).json(contact);
});

// @desc get a contact from id
// @route GET /api/contact/:id
const getNewContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Erorr ("Contacts not Found")
  }
    res.status(201).json(contact);
});

// @desc edit a contact
// @route PUT /api/contact/:id
const editContact = asyncHandler(async (req, res) => {
   const contact = await Contact.findById(req.params.id);
   if (!contact) {
     res.status(404);
     throw new Erorr("Contacts not Found");
  }
  const upadteContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  )
  res.status(200).json(upadteContact);
});

// @desc delete a contact
// @route DELETE /api/contact/:id
const deleteContact = asyncHandler(async (req, res) => {
     const contact = await Contact.findById(req.params.id);
     if (!contact) {
       res.status(404);
       throw new Erorr("Contacts not Found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  postContact,
  getNewContact,
  editContact,
  deleteContact,
};