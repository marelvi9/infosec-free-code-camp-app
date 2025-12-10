const express = require('express');
const helmet = require("helmet");
const app = express();


app.use(helmet());


app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
