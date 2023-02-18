const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hola! Me llamo Becky G!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
