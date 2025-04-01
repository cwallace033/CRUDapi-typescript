"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
// Database connection
const username = process.env.username;
const password = process.env.password;
const dbName = 'Contacts';
const connectString = `mongodb+srv://${username}:${password}@cse341.kvqg6.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};
exports.db = mongoose_1.default.connect(connectString, options)
    .then(res => {
    if (res) {
        console.log('Database connected successfully');
    }
}).catch(err => {
    console.log(err);
});
