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
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "../log/access.log"), { flags: "a" });
testApiApp.use((0, morgan_1.default)("dev"));
testApiApp.use((0, morgan_1.default)("combined", { stream: accessLogStream }));
testApiApp.post("/user", (req, res, next) => {
    let user;
    try {
        user = JSON.parse(req.body);
        res.locals.user = user;
        return next();
    }
    catch (error) {
        res.status(400).send("Invalid JSON");
        return;
    }
});
testApiApp.post("/user", (req, res, next) => {
    const user = res.locals.user;
    if (user.age > 0 && user.age < 100) {
        res.send(JSON.stringify(user));
    }
    else {
        res.status(400).send("Invalid age");
        return;
    }
});
testApiApp.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
exports.default = testApiApp;
//# sourceMappingURL=testRouting.js.map