"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactServices = exports.contactService = void 0;
const contact_1 = require("../Models/contact");
class contactService {
    //create a contact
    createContact(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newContact = yield contact_1.Contact.create(data);
                return newContact;
            }
            catch (error) {
                console.log("Error creating contact:", error);
            }
        });
    }
    //get all contacts
    getAllContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contacts = yield contact_1.Contact.find({});
                return contacts;
            }
            catch (error) {
                console.log("Error fetching contacts:", error);
            }
        });
    }
    //get a contact by id
    getContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contact = yield contact_1.Contact.findById(id);
                if (!contact) {
                    throw new Error("Contact not found");
                }
                return contact;
            }
            catch (error) {
                console.log("Error fetching contact:", error);
            }
        });
    }
    //update a contact
    updateContact(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contactz = yield contact_1.Contact.findByIdAndUpdate({ _id: id }, data, { new: true });
                if (!contactz) {
                    return "post not available";
                }
                return contactz;
            }
            catch (error) {
                console.log("Error updating contact:", error);
            }
        });
    }
    //delete a contact
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contact = yield contact_1.Contact.findByIdAndDelete(id);
                if (!contact) {
                    return "Contact not found";
                }
                return "Contact deleted successfully";
            }
            catch (error) {
                console.log("Error deleting contact:", error);
            }
        });
    }
}
exports.contactService = contactService;
exports.contactServices = new contactService();
