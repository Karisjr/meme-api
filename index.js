const express = require("express");
const cors = require('cors');
const memedata = require("./memesdata")

const app = express();
const port = 8000;

app.use(express.static('public'))

app.use(cors({
    origin: '*'
}));

app.get("/api/cat", function (req, res) {
  res.send(memedata.data);
});

app.get("/api/cat/random", function (req, res) {
    res.send(memedata.data.data.memes[0]);
  });
  

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
