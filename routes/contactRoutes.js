const express = require("express");
const {getAllContacts,createContacts, getContacts, updateContacts, deleteContacts, addContactForm} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(
    getAllContacts
);

router.route("/add").get(
    addContactForm
).post(
    createContacts
);

router.route("/:id").get(
    getContacts
).put(
    updateContacts
).delete(
    deleteContacts
);

module.exports = router;