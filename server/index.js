const express = require("express");
const app = express();
const port = 5000;

const formidable = require("formidable");

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  const form = formidable.IncomingForm();
  form.parse(req);

  form.on("fileBegin", (name, file) => {
    file.path = `${__dirname}/uploads/${file.name}`;
  });

  form.on("file", (name, file) => {
    console.log(`Uploaded ${file.name}`);
  });

  res.send("Files uploaded");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
