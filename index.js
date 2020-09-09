// notes
// npm ( node package manager ) is for installing packages eg. npm install express
// npx is for running scripts eg. npx create-react-app togaruber
const express = require("express");
const cors = require("cors");
const app = express();

var search = require("youtube-search");

var opts = {
  maxResults: 6,
  key: process.env.API_KEY,
};
app.use(cors());
app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/search/:terms", (req, res) => {
  const { terms } = req.params;
  search(terms, opts, function (err, results) {
    if (err) return console.log(err);

    res.json(results);
  });
});
app.listen(process.env.PORT || 5000);

/*function express2() {
  const app = { listen: function () {}, get: function () {} };
  return app;
}
const app2 = express2();
console.log(app2);
app2.listen()
*/
