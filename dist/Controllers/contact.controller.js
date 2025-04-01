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
exports.ContactController = void 0;
const contact_service_1 = require("../Services/contact.service");
const contact_1 = require("../Models/contact");
class contactController {
    constructor() {
        //create contact controller
        this.createContact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                favoriteColor: req.body.favoriteColor,
                birthday: req.body.birthday
            };
            //Validate the data
            const { error, value } = contact_1.ContactSchemaValidate.validate(data);
            if (error) {
                res.send(error.message);
            }
            else {
                const contact = yield contact_service_1.contactServices.createContact(value);
                res.status(201).send(contact);
            }
        });
        //get all contacts controller
        this.getAllContacts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const contacts = yield contact_service_1.contactServices.getAllContacts();
            res.send(contacts);
        });
        //get a contact by id controller
        this.getContact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const contact = yield contact_service_1.contactServices.getContact(id);
            res.send(contact);
        });
        //update a contact controller
        this.updateContact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const contact = yield contact_service_1.contactServices.updateContact(id, req.body);
            res.send(contact);
        });
        //delete a contact controller
        this.deleteContact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield contact_service_1.contactServices.deleteContact(id);
            res.send('contact deleted successfully');
        });
    }
}
exports.ContactController = new contactController();
