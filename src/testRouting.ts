import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs";
import path from "path";

const testApiApp: Express = express();
const port = 3310;

testApiApp.use(bodyParser.text({ type: "*/*" }));

//使用morgan進行log
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../log/access.log"),
  { flags: "a" }
);
testApiApp.use(morgan("dev"));
testApiApp.use(morgan("combined", { stream: accessLogStream }));

//檢查傳送物件是否為JSON格式
testApiApp.post("/user", (req: Request, res: Response, next: NextFunction) => {
  let user;
  try {
    user = JSON.parse(req.body);
    return next();
  } catch (error) {
    res.status(400).send("Invalid JSON");
    return;
  }
});

//檢查數值是否在規定範圍內
// res.send("user info is " + JSON.stringify(user));

testApiApp.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

export default testApiApp;
