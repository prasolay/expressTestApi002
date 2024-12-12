"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const testApiApp = (0, express_1.default)();
const port = 3310;
testApiApp.use(body_parser_1.default.text({ type: "*/*" }));
//使用morgan進行log
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "../log/access.log"), { flags: "a" });
testApiApp.use((0, morgan_1.default)("dev"));
testApiApp.use((0, morgan_1.default)("combined", { stream: accessLogStream }));
//檢查傳送物件是否為JSON格式
testApiApp.post("/user", (req, res, next) => {
    let user;
    try {
        user = JSON.parse(req.body);
        return next();
    }
    catch (error) {
        res.status(400).send("Invalid JSON");
        return;
    }
});
//檢查數值是否在規定範圍內
// res.send("user info is " + JSON.stringify(user));
testApiApp.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
exports.default = testApiApp;
