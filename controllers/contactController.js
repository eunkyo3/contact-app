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

// View add Contact form
// GET /contacts/add
const addContactForm= (req, res) => {
    res.render("add");
}

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
        res.render("update", { contact: contact });
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
        res.redirect("/contacts");
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
        // ID에 해당하는 연락처를 삭제합니다.
        const deletedContactCount = await models.Contact.destroy({
            where: { id: id }
        });
        
        // 삭제된 연락처가 없는 경우
        if (deletedContactCount === 0) {
            return res.status(404).send("Contact not found");
        }

        // 삭제 성공
        res.redirect("/contacts");
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).send("Error deleting contact");
    }
});

module.exports = { getAllContacts, createContacts, getContacts, updateContacts, deleteContacts, addContactForm };
