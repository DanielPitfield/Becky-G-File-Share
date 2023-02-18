const express = require("express");
const app = express();
const port = 5000;

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${new Date()} - ${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

app.get("/upload", (req, res) => {
  res.render("/upload");
});

app.post("/upload", upload.single("fileInput"), (req, res) => {
  res.send("File uploaded");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
