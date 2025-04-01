"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("../Controllers/contact.controller");
exports.router = express_1.default.Router();
exports.router.post('/', contact_controller_1.ContactController.createContact);
exports.router.get('/', contact_controller_1.ContactController.getAllContacts);
exports.router.get('/:id', contact_controller_1.ContactController.getContact);
exports.router.put('/:id', contact_controller_1.ContactController.updateContact);
exports.router.delete('/:id', contact_controller_1.ContactController.deleteContact);
