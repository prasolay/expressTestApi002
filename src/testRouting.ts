import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3310;

app.use(bodyParser.text({ type: "*/*" }));

app.get('/user', (req, res) => {
    var user = JSON.parse(req.body)
    res.send('user info is ' + JSON.stringify(user))
  })

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
