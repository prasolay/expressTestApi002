import express from "express";
import bodyParser from "body-parser";

const testApiApp = express();
const port = 3310;

testApiApp.use(bodyParser.text({ type: "*/*" }));

testApiApp.post("/user", (req, res) => {
  let user;
  try {
    user = JSON.parse(req.body);
  } catch (error) {
    res.status(400).send("Invalid JSON");
    return;
  }
  res.send("user info is " + JSON.stringify(user));
});

testApiApp.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

export default testApiApp;
