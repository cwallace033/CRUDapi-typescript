"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = exports.ContactSchemaValidate = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
//Validation schema
exports.ContactSchemaValidate = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    favoriteColor: joi_1.default.string().optional().allow(''),
    birthday: joi_1.default.date().optional().allow(''),
});
//Contact Schema
const contactSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    favoriteColor: {
        type: String,
        default: ''
    },
    birthday: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});
//Create the model
exports.Contact = (0, mongoose_1.model)('Contact', contactSchema);
