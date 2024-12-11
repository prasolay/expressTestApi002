"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3310;
app.use(body_parser_1.default.text({ type: "*/*" }));
app.get('/user', (req, res) => {
    var user = JSON.parse(req.body);
    res.send('user info is ' + JSON.stringify(user));
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
