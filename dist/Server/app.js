"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = require("../Config/db.config");
const contact_routes_1 = require("../Routes/contact.routes");
const app = (0, express_1.default)();
//Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Routes
app.use('/api/v1/posts', contact_routes_1.router);
//Database connection
db_config_1.db.then(() => {
    app.listen(3000, () => console.log('Server is listening on port 3000'));
});
