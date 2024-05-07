const asyncHandler = require("express-async-handler");
const models = require("../models");

// Get all contacts
// GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    try {
        const contacts = await models.Contact.findAll();
        res.render("index", { contacts: contacts});
    } catch (error) {
        console.error("Error getting contacts:", error);
        res.status(500).send("Error getting contacts");
    }
});

// Create Contact
// POST /contacts
const createContacts = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.send("필수 값이 입력되지 않았습니다.");
    }

    try {
        await models.Contact.create({
            name: name,
            email: email,
            phone: phone
        });
        res.send("Create Contacts");
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).send("Error creating contact");
    }
});

// Get contact by ID
// GET /contacts/:id
const getContacts = asyncHandler(async (req, res) => {
    try {
        const contact = await models.Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).send("Contact not found");
        }
        res.send(contact);
    } catch (error) {
        console.error("Error getting contact:", error);
        res.status(500).send("Error getting contact");
    }
});

// Update contact
// PUT /contact/:id
const updateContacts = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;
    try {
        const contact = await models.Contact.findByPk(id);
        if (!contact) {
            return res.status(404).send("Contact not found");
        }
        await contact.update({ name: name, email: email, phone: phone });
        res.send("Contact updated successfully");
    } catch (error) {
        console.error("Error updating contact:", error);
        res.status(500).send("Error updating contact");
    }
});

// Delete contact
// DELETE /contact/:id
const deleteContacts = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const contact = await models.Contact.findByPk(id);
        if (!contact) {
            return res.status(404).send("Contact not found");
        }
        await contact.destroy();
        res.send("Contact deleted successfully");
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).send("Error deleting contact");
    }
});

module.exports = { getAllContacts, createContacts, getContacts, updateContacts, deleteContacts };
