const express = require("express");
const router = express.Router();
const {
  getContacts,
  postContact,
  getNewContact,
  editContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(postContact);
router.route("/:id").get(getNewContact).put(editContact).delete(deleteContact);

module.exports = router;