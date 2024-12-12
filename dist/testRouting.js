"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const testApiApp = (0, express_1.default)();
const port = 3310;
testApiApp.use(body_parser_1.default.text({ type: "*/*" }));
testApiApp.post("/user", (req, res) => {
    let user;
    try {
        user = JSON.parse(req.body);
    }
    catch (error) {
        res.status(400).send("Invalid JSON");
        return;
    }
    res.send("user info is " + JSON.stringify(user));
});
testApiApp.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
exports.default = testApiApp;
