"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testRouting_1 = __importDefault(require("../testRouting"));
describe("測試標題", function () {
    it("測試內容", function (done) {
        const test01ApiApp = testRouting_1.default;
        const port = 3310;
        done();
    });
    it("測試內容2", function (done) {
        console.log("進入測試內容2");
        done();
    });
});
//# sourceMappingURL=testRouting.spec.js.map